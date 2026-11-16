"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState, useCallback } from "react";

interface OfficeLocation {
  city: string;
  region: string;
  coords: [number, number]; // [lat, long]
}

export const GLOBAL_OFFICES: OfficeLocation[] = [
  { city: "San Francisco", region: "North America Hub", coords: [37.7749, -122.4194] },
  { city: "London", region: "Europe Hub", coords: [51.5074, -0.1278] },
  { city: "Berlin", region: "Central Europe", coords: [52.52, 13.405] },
  { city: "Dubai", region: "Middle East Hub", coords: [25.2048, 55.2708] },
  { city: "Singapore", region: "APAC Hub", coords: [1.3521, 103.8198] },
  { city: "India (R&D)", region: "Global Engineering HQ", coords: [26.9124, 75.7873] },
];

interface InteractiveGlobeProps {
  className?: string;
  selectedCity?: string | null;
  onSelectCity?: (city: string) => void;
}

export function InteractiveGlobe({ className, selectedCity, onSelectCity }: InteractiveGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const pointerYInteracting = useRef<number | null>(null);
  const pointerYMovement = useRef(0.2);

  // Target angles for smooth flying to selected city
  const targetPhi = useRef<number | null>(null);
  const targetTheta = useRef<number | null>(null);

  const [zoom, setZoom] = useState(1);
  const zoomRef = useRef(1);
  zoomRef.current = zoom;

  // Function to fly to location
  const flyTo = useCallback((lat: number, long: number) => {
    // Convert lat/long to phi & theta
    // long to phi: long = 0 is prime meridian
    const phi = -((long * Math.PI) / 180) + Math.PI * 0.7;
    const theta = (lat * Math.PI) / 180 * 0.5;
    targetPhi.current = phi;
    targetTheta.current = Math.max(-0.4, Math.min(0.6, theta));
  }, []);

  // When selectedCity changes from parent, fly to it
  useEffect(() => {
    if (selectedCity) {
      const office = GLOBAL_OFFICES.find((o) => o.city === selectedCity);
      if (office) {
        flyTo(office.coords[0], office.coords[1]);
      }
    }
  }, [selectedCity, flyTo]);

  useEffect(() => {
    let phi = 0;
    let theta = 0.2;
    let width = 0;

    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;

    const onResize = () => {
      if (currentCanvas) {
        width = currentCanvas.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(currentCanvas, {
      devicePixelRatio: typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 0,
      diffuse: 1.35,
      mapSamples: 20000,
      mapBrightness: 2.2,
      // Rich contrast navy blue for continents so they stand out clearly against the ocean
      baseColor: [0.12, 0.26, 0.48],
      // Glowing red-orange for strategic office pins
      markerColor: [0.92, 0.2, 0.2],
      // Atmospheric ice glow around edges
      glowColor: [0.82, 0.9, 1],
      markers: GLOBAL_OFFICES.map((office) => ({
        location: office.coords,
        size: office.city.includes("India") || office.city === "San Francisco" ? 0.09 : 0.07,
      })),
      onRender: (state) => {
        // If user is dragging with mouse/pointer
        if (pointerInteracting.current !== null) {
          phi = pointerInteractionMovement.current;
          theta = pointerYMovement.current;
          targetPhi.current = null;
          targetTheta.current = null;
        } else if (targetPhi.current !== null && targetTheta.current !== null) {
          // Smoothly interpolate towards target location
          const dPhi = (targetPhi.current - phi);
          const dTheta = (targetTheta.current - theta);
          phi += dPhi * 0.05;
          theta += dTheta * 0.05;
          pointerInteractionMovement.current = phi;
          pointerYMovement.current = theta;

          // If close enough, release target and resume gentle auto-spin
          if (Math.abs(dPhi) < 0.01 && Math.abs(dTheta) < 0.01) {
            targetPhi.current = null;
            targetTheta.current = null;
          }
        } else {
          // Gentle auto-rotation when idle
          phi += 0.0035;
          pointerInteractionMovement.current = phi;
        }

        state.phi = phi;
        state.theta = theta;
        state.width = width * 2 * zoomRef.current;
        state.height = width * 2 * zoomRef.current;
      },
    });

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    pointerYInteracting.current = e.clientY - pointerYMovement.current * 400;
    targetPhi.current = null;
    targetTheta.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing";
    }
  };

  const handlePointerUp = () => {
    pointerInteracting.current = null;
    pointerYInteracting.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = deltaX * 0.006;
    }
    if (pointerYInteracting.current !== null) {
      const deltaY = e.clientY - pointerYInteracting.current;
      pointerYMovement.current = Math.max(-0.55, Math.min(0.65, deltaY / 400));
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setZoom((prev) => Math.max(0.85, Math.min(1.4, prev - e.deltaY * 0.001)));
  };

  return (
    <div className={`relative flex items-center justify-center overflow-hidden w-full h-full ${className || ""}`}>
      
      {/* ── 3D Ocean Shaded Spherical Backdrop ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[78%] h-[78%] rounded-full shadow-[inset_0_0_50px_rgba(0,102,204,0.18),0_12px_36px_rgba(0,102,204,0.12)] border border-blue-200/70"
          style={{
            background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #f0f7ff 55%, #d9ebff 100%)",
          }}
        />
      </div>

      {/* ── WebGL 3D Continents & Interactive Layer ── */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onPointerMove={handlePointerMove}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none relative z-10"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
}

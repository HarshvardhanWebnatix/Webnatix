"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

export interface OfficeLocation {
  city: string;
  region: string;
  coords: [number, number]; // [lat, lon]
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

// Convert geographic lat/lon to 3D Cartesian coordinates on sphere
function latLongToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.cos(theta) * Math.sin(phi);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(theta) * Math.sin(phi);
  return new THREE.Vector3(x, y, z);
}

export function InteractiveGlobe({ className, selectedCity, onSelectCity }: InteractiveGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Screen-projected positions for 2D UI markers/tooltips
  const [projectedMarkers, setProjectedMarkers] = useState<
    Array<{
      city: string;
      region: string;
      x: number;
      y: number;
      visible: boolean;
    }>
  >([]);

  // Interaction refs
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const rotationVelocity = useRef({ x: 0, y: 0 });
  const autoRotate = useRef(true);
  const targetRotation = useRef<{ x: number; y: number } | null>(null);

  // Generous camera distance scaled for enlarged globe
  const zoomDistance = useRef(5.4);
  const targetZoomDistance = useRef(5.4);

  // Rotation Euler values
  const currentRotation = useRef({ x: 0.15, y: -Math.PI * 0.8 });

  // Fly to office location
  const flyToCity = useCallback((city: string) => {
    const office = GLOBAL_OFFICES.find((o) => o.city === city);
    if (!office) return;
    const [lat, lon] = office.coords;
    // Calculate Euler angles that bring (lat, lon) directly to the front center
    const targetY = -((lon + 90) * Math.PI) / 180;
    const targetX = -((lat * 0.65) * Math.PI) / 180;

    targetRotation.current = { x: targetX, y: targetY };
    autoRotate.current = false;
  }, []);

  // Watch for external selectedCity change
  useEffect(() => {
    if (selectedCity) {
      flyToCity(selectedCity);
    }
  }, [selectedCity, flyToCity]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // ── 1. Three.js Scene Setup ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = zoomDistance.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ── 2. Realistic Earth Group ──
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // Initial orientation
    earthGroup.rotation.order = "YXZ";
    earthGroup.rotation.x = currentRotation.current.x;
    earthGroup.rotation.y = currentRotation.current.y;

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load("/assets/earth/earth_day.jpg");
    const earthSpecular = textureLoader.load("/assets/earth/earth_specular.jpg");
    const earthClouds = textureLoader.load("/assets/earth/earth_clouds.png");

    earthMap.colorSpace = THREE.SRGBColorSpace;

    // ── Earth Core Sphere (Photorealistic NASA Blue Marble) ──
    // Scaled to 1.75 for maximum prominent scale across card height and width
    const earthRadius = 1.75;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthMap,
      specularMap: earthSpecular,
      specular: new THREE.Color(0x3a6088),
      shininess: 18,
      bumpScale: 0.05,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earthMesh);

    // ── Drifting Cloud Sphere ──
    const cloudGeometry = new THREE.SphereGeometry(earthRadius * 1.012, 64, 64);
    const cloudMaterial = new THREE.MeshLambertMaterial({
      map: earthClouds,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    earthGroup.add(cloudMesh);

    // ── Ethereal Atmospheric Limb Glow ──
    const atmosphereVertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const atmosphereFragmentShader = `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
        gl_FragColor = vec4(0.25, 0.55, 1.0, 1.0) * intensity;
      }
    `;
    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius * 1.08, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // ── 3. Strategic Office 3D Markers & Pulsing Radar Beacons ──
    const markerMeshes: {
      beacon: THREE.Mesh;
      pin: THREE.Mesh;
      office: OfficeLocation;
      localPos: THREE.Vector3;
    }[] = [];

    const pinGeometry = new THREE.SphereGeometry(0.038, 16, 16);
    const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xff3344 });

    const beaconGeometry = new THREE.RingGeometry(0.022, 0.065, 32);
    const beaconMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066cc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });

    GLOBAL_OFFICES.forEach((office) => {
      const pos = latLongToVector3(office.coords[0], office.coords[1], earthRadius * 1.002);
      
      // Office Pin Head
      const pin = new THREE.Mesh(pinGeometry, pinMaterial);
      pin.position.copy(pos);
      earthGroup.add(pin);

      // Radar Beacon Ring (Oriented along normal vector)
      const beacon = new THREE.Mesh(beaconGeometry, beaconMaterial.clone());
      beacon.position.copy(pos.clone().multiplyScalar(1.001));
      beacon.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize());
      earthGroup.add(beacon);

      markerMeshes.push({
        beacon,
        pin,
        office,
        localPos: pos,
      });
    });

    // ── 4. Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x88bbff, 0.8);
    fillLight.position.set(-5, -2, -3);
    scene.add(fillLight);

    // ── 5. Responsive Resize ──
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ── 6. Animation Loop ──
    let rafId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Independent cloud drift
      cloudMesh.rotation.y += 0.00045;

      // Pulse beacon rings
      markerMeshes.forEach((item, idx) => {
        const pulse = (Math.sin(elapsedTime * 3.5 + idx * 0.8) + 1) / 2;
        const scale = 0.8 + pulse * 1.5;
        item.beacon.scale.set(scale, scale, 1);
        (item.beacon.material as THREE.MeshBasicMaterial).opacity = Math.max(0.1, 0.9 - pulse * 0.8);
      });

      // Target fly-to animation with smooth damping
      if (targetRotation.current) {
        // Find shortest angular path for Y rotation
        let diffY = (targetRotation.current.y - currentRotation.current.y) % (Math.PI * 2);
        if (diffY > Math.PI) diffY -= Math.PI * 2;
        if (diffY < -Math.PI) diffY += Math.PI * 2;

        const diffX = targetRotation.current.x - currentRotation.current.x;

        currentRotation.current.y += diffY * 0.08;
        currentRotation.current.x += diffX * 0.08;

        if (Math.abs(diffY) < 0.001 && Math.abs(diffX) < 0.001) {
          targetRotation.current = null;
          // Resume slow auto-rotation after 4 seconds
          setTimeout(() => {
            if (!isDragging.current && !targetRotation.current) {
              autoRotate.current = true;
            }
          }, 3500);
        }
      } else if (isDragging.current) {
        // Dragging is applied directly in event listeners
      } else {
        // Inertia damping
        currentRotation.current.y += rotationVelocity.current.y;
        currentRotation.current.x += rotationVelocity.current.x;
        rotationVelocity.current.y *= 0.93;
        rotationVelocity.current.x *= 0.93;

        // Gentle auto rotation when idle
        if (autoRotate.current) {
          currentRotation.current.y += 0.0014;
        }
      }

      // Clamp vertical tilt so Earth doesn't flip upside down
      currentRotation.current.x = Math.max(-0.85, Math.min(0.85, currentRotation.current.x));

      // Apply rotations
      earthGroup.rotation.x = currentRotation.current.x;
      earthGroup.rotation.y = currentRotation.current.y;

      // Smooth camera zoom
      zoomDistance.current += (targetZoomDistance.current - zoomDistance.current) * 0.1;
      camera.position.z = zoomDistance.current;

      // ── Project 3D office markers to 2D screen positions ──
      const rect = container.getBoundingClientRect();
      const newProjected: typeof projectedMarkers = [];

      markerMeshes.forEach((item) => {
        // Compute world position
        const worldPos = item.localPos.clone();
        worldPos.applyMatrix4(earthGroup.matrixWorld);

        // Check if marker is on the hemisphere facing the camera
        const normal = worldPos.clone().normalize();
        const camDir = camera.position.clone().normalize();
        const isFacing = normal.dot(camDir) > 0.15;

        // Project to NDC (-1 to 1)
        const screenPos = worldPos.clone().project(camera);
        const x = (screenPos.x * 0.5 + 0.5) * rect.width;
        const y = (-(screenPos.y * 0.5) + 0.5) * rect.height;

        newProjected.push({
          city: item.office.city,
          region: item.office.region,
          x,
          y,
          visible: isFacing,
        });
      });

      setProjectedMarkers(newProjected);

      // Render Three.js frame
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      pinGeometry.dispose();
      pinMaterial.dispose();
      beaconGeometry.dispose();
      beaconMaterial.dispose();
      earthMap.dispose();
      earthSpecular.dispose();
      earthClouds.dispose();
      renderer.dispose();
    };
  }, []);

  // ── Mouse & Touch Drag Handlers ──
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = true;
    autoRotate.current = false;
    targetRotation.current = null;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
    rotationVelocity.current = { x: 0, y: 0 };
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing";
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;

    const rotSpeed = 0.005;
    currentRotation.current.y += deltaX * rotSpeed;
    currentRotation.current.x += deltaY * rotSpeed;

    rotationVelocity.current = {
      x: deltaY * rotSpeed,
      y: deltaX * rotSpeed,
    };

    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
    // Resume auto-rotation after a short pause if no momentum
    setTimeout(() => {
      if (!isDragging.current && !targetRotation.current) {
        autoRotate.current = true;
      }
    }, 4000);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomDelta = e.deltaY * 0.0025;
    targetZoomDistance.current = Math.max(4.4, Math.min(6.8, targetZoomDistance.current + zoomDelta));
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className={`relative flex items-center justify-center overflow-hidden w-full h-full select-none ${className || ""}`}
    >
      {/* ── Three.js WebGL Canvas ── */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none block relative z-10"
      />

      {/* ── Interactive 2D Screen Overlays for Strategic Hubs ── */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {projectedMarkers.map((marker, idx) => {
          if (!marker.visible) return null;
          const isSelected = selectedCity === marker.city;

          return (
            <div
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-full transition-opacity duration-200 pointer-events-auto cursor-pointer"
              style={{
                left: `${marker.x}px`,
                top: `${marker.y - 10}px`,
              }}
              onClick={() => onSelectCity?.(marker.city)}
            >
              <div
                className={`group flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-md transition-all ${
                  isSelected
                    ? "bg-[#0066cc] text-white ring-2 ring-blue-300 scale-105"
                    : "bg-white/95 text-slate-800 border border-slate-200/90 hover:bg-[#0066cc] hover:text-white"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-white animate-ping" : "bg-red-500"
                  }`}
                />
                <span className="whitespace-nowrap">{marker.city}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

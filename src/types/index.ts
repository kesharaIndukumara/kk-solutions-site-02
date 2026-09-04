export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TrustPoint {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

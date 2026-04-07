export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  highlights?: string[];
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  focusAreas?: string[];
  image?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
}

export interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics?: CaseStudyMetric[];
}

export interface ContactFormValues {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  topic: string;
  originCountry: string;
  destinationCountry: string;
  avgWeight?: number;
  weeklyVolume?: string;
  message: string;
  consent: boolean;
}

export interface TrackingEvent {
  dateTime: string;
  location: string;
  description: string;
}

export interface TrackingResult {
  status: string;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  events: TrackingEvent[];
}

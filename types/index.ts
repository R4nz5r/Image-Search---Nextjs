export interface UnsplashImage {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads?: number | null;
  likes?: number | null;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string | null;
  alt_description: string | null;
  exif: {
    make: string | null;
    model: string | null;
    exposure_time: string | null;
    aperture: string | null;
    focal_length: string | null;
    iso: number | null;
  };
  location: {
    name: string | null;
    city: string | null;
    country: string | null;
    position: {
      latitude: number | null;
      longitude: number | null;
    };
  };
  tags: Array<{
    type: string;
    title: string;
  }>;
  current_user_collections: Array<{
    id: number;
    title: string;
    published_at: string;
    updated_at: string;
    curated: boolean;
    featured: boolean;
    total_photos: number;
    private: boolean;
    share_key: string;
  }>;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string | null;
      portfolio_url: string | null;
      twitter_username: string | null;
      paypal_email: string | null;
    };
  };
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export interface SearchParams {
  query: string;
  page: number;
  per_page: number;
}

export interface ImageModalProps {
  image: UnsplashImage | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface ImageGridProps {
  images: UnsplashImage[];
  loading: boolean;
  onImageClick: (image: UnsplashImage) => void;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  href?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactPageProps {
  className?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

export interface CompanyStat {
  number: string;
  label: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface AboutPageProps {
  className?: string;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
  };
  mission: {
    title: string;
    description: string;
    vision: string;
  };
  values: CompanyValue[];
  team: {
    title: string;
    description: string;
    members: TeamMember[];
  };
  stats: CompanyStat[];
  timeline: {
    title: string;
    milestones: Milestone[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      link: string;
    };
    secondaryButton: {
      text: string;
      link: string;
    };
  };
}

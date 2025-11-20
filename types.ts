export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  month: string;
  year: string;
  description?: string;
  image?: string;
  isMain?: boolean;
}

export interface ProjectItem {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  area: string;
}
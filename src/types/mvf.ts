export interface NavItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: ImageAsset;
  body: string[];
}

export interface WinnerEntry {
  name: string;
  detail?: string;
}

export interface WinnerYear {
  year: string;
  entries: WinnerEntry[];
}

export interface InfoSection {
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
}

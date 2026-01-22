export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
}

export interface MerchItem {
  id: number;
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
}
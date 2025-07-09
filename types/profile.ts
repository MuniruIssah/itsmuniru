import { ReactNode } from "react";

type Stat = {
  value: number;
  label: string;
};

type InfoOrLink = {
  icon: ReactNode;
  label: string;
  link?: string;
};

export interface IProfile {
  name: string;
  avatarUrl?: string;
  coverGradient:string;
  handle: string;
  description: string;
  infoOrLink: InfoOrLink[];
  stats: Stat[];
  tabs: string[];
}

type PostImage = {
  src: string;
  alt: string;
  link?: string;
};

export interface IPost {
  id: string;
  profile?: IProfile;
  content: string;
  tags?: string[];
  images?: PostImage[];
  createdAt?: string;
  replies?: IPost[];
  pinned: boolean;
  parentPost?:IPost
}

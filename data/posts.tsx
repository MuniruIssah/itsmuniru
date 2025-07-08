import { IPost } from "@/types";
import { profiles } from "./profiles";

const movaBackend:IPost={
  id: "1",
  profile: profiles.filter((item) => item.handle === "mova")[0]!,
  content: "Mova Backend: A thread",
  images: [
    {
      src: "/images/mova-branding-image.jpg",
      alt: "Mova Brand",
      link: "https://www.movanow.co",
    },
  ],
  pinned: false,
}

const movaBackendReply:IPost={
  id: "3",
  profile: profiles.filter((item) => item.handle === "mova")[0]!,
  content: "Node Backend and all",
  pinned: false,
  parentPost:movaBackend
}


export const posts: IPost[] = [
  movaBackend,
  movaBackendReply
];




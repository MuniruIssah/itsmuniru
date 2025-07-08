import { IPost, IProfile } from "@/types";

export const replyFactory = (
  id: string,
  parentPost: IPost,
  profile: IProfile,
  content: string,
  tags?:string[],
  images?: string[],
): IPost => ({
  id,
  profile,
  parentPost,
  pinned: false,
  content,
  tags,
  images: images?.map((item, index) => ({ src: item, alt: index.toString() })),
});

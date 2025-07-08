import { posts } from "@/data/posts";

export const getReplyCount = (postId: string) => {
  return posts.filter((item) => item.parentPost?.id === postId).length;
};

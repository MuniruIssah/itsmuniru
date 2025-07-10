"use client";
import { IPost } from "@/types";
import { MessageCircle, Pin } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageGrid from "./ImageGrid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getReplyCount } from "@/utils/getReplyCount";
import { ProfileHoverCard } from "./ProfileHoverCard";
const Post = (post: IPost & { thread: boolean }) => {
  return (
    <div className="border-b pt-7">
      {post.parentPost?.id && post.thread && (
        <PostItem post={post.parentPost} isParent />
      )}
      <PostItem post={post} />
    </div>
  );
};

export default Post;

const PostItem = ({
  post,
  isParent = false,
}: {
  post: IPost;
  isParent?: boolean;
}) => {
  const router = useRouter();
  const replyCount = getReplyCount(post.id);
  return (
    <div
      onClick={() => router.push(`/post/${post.id}`)}
      className={`flex gap-3 items-stretch px-6  ${
        post.pinned ? "bg-zinc-900" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <ProfileHoverCard profile={post.profile!}>
          <Link href={`/profile/${post.profile?.handle}`} className="" onClick={(e) => e.stopPropagation()}>
            <Avatar className="mt-1 w-11 h-11">
              <AvatarImage
                src={post.profile?.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>
                {post.profile?.name.charAt(0) ?? "SG"}
              </AvatarFallback>
            </Avatar>
          </Link>
        </ProfileHoverCard>
        {isParent && <div className="border-1 flex-1 h-[100%]"></div>}
      </div>

      <div className="">
        {/* CONTENT */}
        <div className="flex flex-col gap-4 mb-4">
          {/* MAIN CONTENT */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <ProfileHoverCard profile={post.profile!}>
                  <Link href={`/profile/${post.profile?.handle}`} onClick={(e) => e.stopPropagation()}>
                    <span className="font-bold">{post.profile?.name}</span>
                  </Link>
                </ProfileHoverCard>

                <ProfileHoverCard profile={post.profile!}>
                  <Link href={`/profile/${post.profile?.handle}`} onClick={(e) => e.stopPropagation()}>
                    <span className="text-muted-foreground">
                      @{post.profile?.handle}
                    </span>
                  </Link>
                </ProfileHoverCard>
              </div>
              {post.pinned && <Pin size={18} className="rotate-45" />}
            </div>

            <p className="whitespace-pre-line">{post.content}</p>
          </div>
          {/* IMAGES */}
          {post.images?.length && <ImageGrid images={post.images} />}
        </div>
        {/* ACTIONS */}
        <div className="flex justify-between items-center pb-7">
          <div className="flex gap-1 text-muted-foreground text-sm items-center">
            <MessageCircle size={16} /> <span>{replyCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

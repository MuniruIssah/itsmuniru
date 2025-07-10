"use client";
import { IPost } from "@/types";
import { MessageCircle, Pin } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageGrid from "./ImageGrid";
import Link from "next/link";
import { getReplyCount } from "@/utils/getReplyCount";
import { ProfileHoverCard } from "./ProfileHoverCard";

const MainPost = (post: IPost) => {
  const replies = getReplyCount(post.id);
  return (
    <div
      className={`items-start border-b px-6 py-4 ${
        post.pinned ? "bg-zinc-900" : ""
      }`}
    >
      <div className="">
        {/* CONTENT */}
        <div className="flex flex-col gap-4 mb-2">
          {/* MAIN CONTENT */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center mb-4">
                <ProfileHoverCard profile={post.profile!}>
                  <Link href={`/profile/${post.profile?.handle}`}>
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
                <div className="flex gap-2">
                  <ProfileHoverCard profile={post.profile!}>
                    <Link href={`/profile/${post.profile?.handle}`}>
                      <span className="font-bold">{post.profile?.name}</span>
                    </Link>
                  </ProfileHoverCard>

                  <ProfileHoverCard profile={post.profile!}>
                    <Link href={`/profile/${post.profile?.handle}`}>
                      <span className="text-muted-foreground">
                        @{post.profile?.handle}
                      </span>
                    </Link>
                  </ProfileHoverCard>
                </div>
              </div>

              {post.pinned && <Pin size={18} className="rotate-45" />}
            </div>

            <p className="whitespace-pre-line">{post.content}</p>
          </div>
          {/* IMAGES */}
          {post.images?.length && <ImageGrid images={post.images} />}
        </div>
        {/* ACTIONS */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-muted-foreground text-sm items-center">
            <MessageCircle size={16} /> <span>{replies}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;

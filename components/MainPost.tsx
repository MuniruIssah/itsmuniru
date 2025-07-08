"use client";
import { IPost } from "@/types";
import { MessageCircle, Pin } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageGrid from "./ImageGrid";
import Link from "next/link";
import { useRouter } from "next/navigation";
const MainPost = (post: IPost) => {
  const router = useRouter();
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
              <div className="flex gap-2 items-center mb-2">
                <Link href={`/profile/${post.profile?.handle}`}>
                  <Avatar className="mt-1">
                    <AvatarImage
                      src={post.profile?.avatarUrl}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {post.profile?.name.charAt(0) ?? "SG"}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div className="flex gap-2">
                  <Link href={`/profile/${post.profile?.handle}`}>
                    <span>{post.profile?.name}</span>
                  </Link>
                  <span className="text-muted-foreground">
                    @{post.profile?.handle}
                  </span>
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
            <MessageCircle size={16} /> <span>{post.replies?.length ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;

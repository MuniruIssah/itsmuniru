import MainPost from "@/components/MainPost";
import Post from "@/components/Post";
import PostPageLayout from "@/components/PostPageLayout";
import StickyBack from "@/components/StickyBack";
import { posts } from "@/data/posts";
import { notFound, redirect } from "next/navigation";
import React from "react";

const SinglePost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = posts.filter((item) => item.id === id)[0];

  if (!post) redirect('/');

  const replies = posts.filter((item) => item.parentPost?.id === id);

  return (
    <PostPageLayout>
      <div className="items-center w-xl mx-auto min-h-screen gap-6  font-[family-name:var(--font-geist-sans)] border-x overflow-y-auto">
        <div className="">
          <StickyBack type="post" />
          <MainPost {...post} />
          {replies.length > 0 && (
            <div>
              {replies.map((item, index) => (
                <Post thread={false} key={index} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PostPageLayout>
  );
};

export default SinglePost;

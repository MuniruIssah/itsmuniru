import MainPost from "@/components/MainPost";
import Post from "@/components/Post";
import PostPageLayout from "@/components/PostPageLayout";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import React from "react";

const SinglePost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = posts.filter((item) => item.id === id)[0];

  if (!post) notFound;

  return (
    <PostPageLayout>
      <div className="items-center w-xl mx-auto min-h-screen gap-6  font-[family-name:var(--font-geist-sans)] border-x pt-10 overflow-y-auto">
        <div className="">
          <MainPost {...post} />
          <div>
            {post?.replies?.map((item, index) => (
              <Post key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </PostPageLayout>
  );
};

export default SinglePost;

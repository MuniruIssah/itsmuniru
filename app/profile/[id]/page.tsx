import PageLayout from "@/components/PageLayout";
import PersonalDetailsSection from "@/components/PersonalDetailsSection";
import Post from "@/components/Post";
import RelatedProfiles from "@/components/RelatedProfiles";
import StickyBack from "@/components/StickyBack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currentStack, tempPost } from "@/data";
import { posts } from "@/data/posts";
import { profiles } from "@/data/profiles";
import { notFound, redirect } from "next/navigation";
import React from "react";

const SingleProfile = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const MY_PROFILE_ID = "ningen_dewa_nai";

  if (id === MY_PROFILE_ID) redirect("/");

  const profile = profiles.filter((item) => item.handle === id)[0];
  const languagesAndFrameworks =
    id === MY_PROFILE_ID
      ? currentStack[0].items
      : currentStack[0].items.filter(
          (item) => item.tags.includes(id) || item.tags.includes("general")
        );
  const tools =
    id === MY_PROFILE_ID
      ? currentStack[1].items
      : currentStack[1].items.filter(
          (item) => item.tags.includes(id) || item.tags.includes("general")
        );

  if (!profile) redirect('/');

  const profilePosts = posts.filter(
    (item) => item.tags?.includes(id) && !item.parentPost
  );

  return (
    <PageLayout
      languagesAndFrameworks={languagesAndFrameworks}
      toolsAndOthers={tools}
    >
      <div className="items-center max-w-xl mx-auto min-h-screen   gap-6  font-[family-name:var(--font-geist-sans)] border-x  overflow-y-auto">
        <StickyBack type="profile" title={profile.name} />

        <div className="">
          <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center sm:items-start">
            <PersonalDetailsSection {...profile} />
          </main>
        </div>
        <Tabs defaultValue="experience" className="mt-5">
          <TabsList className="flex w-full">
            <TabsTrigger value="experience" className="flex-1">
              Feed
            </TabsTrigger>
            {/* <TabsTrigger value="project" className="flex-1">
              Projects
            </TabsTrigger>
            <TabsTrigger value="stack" className="flex-1">
              Stack
            </TabsTrigger> */}
          </TabsList>
          <TabsContent value="experience">
            <div>
              {profilePosts.slice(0, 2).map((item, index) => (
                <Post thread={false} key={index} {...item} />
              ))}
              <RelatedProfiles currentProfile={id} />

              {profilePosts.slice(2).map((item, index) => (
                <Post thread={false} key={index} {...item} />
              ))}
            </div>
          </TabsContent>
          {/* <TabsContent value="project"></TabsContent>
          <TabsContent value="stack"></TabsContent> */}
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default SingleProfile;

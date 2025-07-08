import { currentStack, tempPost } from "@/data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalDetailsSection from "@/components/PersonalDetailsSection";
import Post from "@/components/Post";
import { profiles } from "@/data/profiles";
import PageLayout from "@/components/PageLayout";
import { posts } from "@/data/posts";

export default function Home() {
  const MY_HANDLE='ningen_dewa_nai'
  const me = profiles.filter(item=>item.handle===MY_HANDLE)[0];
  const languagesAndFrameworks = currentStack[0].items;
  const toolsAndOthers = currentStack[1].items;
  const allPosts=posts;
  return (
    <PageLayout languagesAndFrameworks={languagesAndFrameworks} toolsAndOthers={toolsAndOthers}>
      <div className="items-center max-w-xl mx-auto min-h-screen   gap-6  font-[family-name:var(--font-geist-sans)] border-x pt-10 overflow-y-auto">
        <div className="px-8 py-3">
          <main className="flex flex-col gap-6 sm:gap-8 row-start-2 items-center sm:items-start">
            <PersonalDetailsSection {...me} />
          </main>
        </div>
        <Tabs defaultValue="experience" className="mt-5">
          <TabsList className="flex w-full">
            <TabsTrigger value="experience" className="flex-1">
              All
            </TabsTrigger>
            <TabsTrigger value="project" className="flex-1">
              Projects
            </TabsTrigger>
            <TabsTrigger value="stack" className="flex-1">
              Stack
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <div>
              {allPosts.map((item, index) => (
                <Post key={index} {...item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="project"></TabsContent>
          <TabsContent value="stack"></TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}

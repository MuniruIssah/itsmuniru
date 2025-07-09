import { IPost } from "@/types";
import { profiles } from "../profiles";
import { replyFactory } from "@/utils/replyFactory";

const ORIGO_PROFILE = profiles.filter(
  (item) => item.handle === "origosoftware"
)[0];

const origosoftwareWebApps: IPost = {
  id: "origosoftware",
  tags: ["origosoftware"],
  profile: ORIGO_PROFILE,
  content: ` 🚀 Origo Health Web Apps:
  During my time at Origo Software, I worked on two projects — one in logistics, the other in healthcare.
  Funny enough, my role in both projects closely MIRRORED each other.
  (Thread 👇)`,
  images: [
    {
      src: "/images/mirror.gif",
      alt: "Origo Software",
    },
  ],
  pinned: false,
};

const replies: { content: string; images?: string[] }[] = [
    {
        content:`👨‍💻 My Role:

        - Built CRUD pages for all core entities
        - Integrated all pages with their respective API endpoints for full functionality
        - Set coding standards for readability & maintainability
        - Reviewed teammates' code daily
        - Attended daily stand-ups for ticket sharing & coordination`
    }
]

const webappsReplies=replies.map((item,index)=>replyFactory(`origoweb_${index}`,origosoftwareWebApps,ORIGO_PROFILE,item.content,['origosoftware']))


export const origoThread=[...webappsReplies,origosoftwareWebApps]
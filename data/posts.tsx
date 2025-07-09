import { IPost } from "@/types";
import {
  movaAdminPortalThread,
  movaAboutThread,
  movaBackendThread,
} from "./posts/mova";
import { replyFactory } from "@/utils/replyFactory";
import { mallyAbout, mallyBackendThread, mallyFrontendThread } from "./posts/mallyhealth";

export const posts: IPost[] = [

  ...mallyFrontendThread,
  ...mallyBackendThread,
  ...mallyAbout,
  ...movaAdminPortalThread,
  ...movaBackendThread,
  ...movaAboutThread,
];
export { replyFactory };

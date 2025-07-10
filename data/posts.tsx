import { IPost } from "@/types";
import {
  movaAdminPortalThread,
  movaAboutThread,
  movaBackendThread,
} from "./posts/mova";
import { replyFactory } from "@/utils/replyFactory";
import { mallyAbout, mallyBackendThread, mallyFrontendThread } from "./posts/mallyhealth";
import { origoThread } from "./posts/origohealth";
import { maeThread, trialViuThread, viuhealthBackendThread, viuhealthCIThread, viuhealthWebAppsThread } from "./posts/viuhealth";
import {  gtbankThreads } from "./posts/gtbank";

export const posts: IPost[] = [
  ...mallyFrontendThread,
  ...mallyBackendThread,
  ...mallyAbout,
  ...movaAdminPortalThread,
  ...movaBackendThread,
  ...movaAboutThread,
  ...trialViuThread,
  ...maeThread,
  ...viuhealthBackendThread,
  ...viuhealthWebAppsThread,
  ...viuhealthCIThread,
  ...gtbankThreads,
  ...origoThread
];
export { replyFactory };

import { IPost, IProfile } from "@/types";
import { profiles } from "./profiles";
import { movaAdminPortalThread, movaBackendThread } from "./posts/mova";
import { replyFactory } from "@/utils/replyFactory";

export const posts: IPost[] = [...movaAdminPortalThread,...movaBackendThread];
export { replyFactory };


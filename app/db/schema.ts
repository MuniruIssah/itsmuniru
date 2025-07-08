import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profilesTable = sqliteTable("profiles_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  avatarUrl: text("avatar_url"),
  handle: text("handle").notNull().unique(),
  description: text("description").notNull(),
});

export const profileStatsTable = sqliteTable("profile_stats_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  profileId: int("profile_id").notNull(),
  label: text("label").notNull(),
  value: int("value").notNull(),
});

export const profileLinksTable = sqliteTable("profile_links_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  profileId: int("profile_id").notNull(),
  label: text("label").notNull(),
  link: text("link"),
  icon: text("icon"), // store icon name as string
});

export const profileTabsTable = sqliteTable("profile_tabs_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  profileId: int("profile_id").notNull(),
  name: text("name").notNull(),
});

export const postsTable = sqliteTable("posts_table", {
  id: text("id").primaryKey(),
  profileId: int("profile_id"),
  content: text("content").notNull(),
  createdAt: text("created_at"),
  updatedAt: text("updated_at"),
});

export const postTagsTable = sqliteTable("post_tags_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  postId: text("post_id").notNull(),
  tag: text("tag").notNull(),
});

export const postImagesTable = sqliteTable("post_images_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  postId: text("post_id").notNull(),
  src: text("src").notNull(),
  alt: text("alt").notNull(),
  link: text("link"),
  position: int("position"), // 0 to 3
});

export const postRepliesTable = sqliteTable("post_replies_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  parentPostId: text("parent_post_id").notNull(),
  replyPostId: text("reply_post_id").notNull(),
});

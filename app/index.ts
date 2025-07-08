import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";
import {
  profilesTable,
  profileLinksTable,
  postImagesTable,
  postRepliesTable,
  postTagsTable,
  postsTable,
  profileStatsTable,
  profileTabsTable,
} from "./db/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
    const issah: typeof profilesTable.$inferInsert = {
        name: 'Issah Muniru',
        handle: "ningen_dewa_nai",
        avatarUrl:"/images/issah.jpg",
        description: "A Fullstack Applications Developer with 6 years of experience building healthcare and banking products — recently at ViuHealth.",

    };

  //   await db.insert(usersTable).values(user);
  //   console.log('New user created!')
  //   const users = await db.select().from(usersTable);
  //   console.log('Getting all users from the database: ', users)
  //   /*
  //   const users: {
  //     id: number;
  //     name: string;
  //     age: number;
  //     email: string;
  //   }[]
  //   */
  //   await db
  //     .update(usersTable)
  //     .set({
  //       age: 31,
  //     })
  //     .where(eq(usersTable.email, user.email));
  //   console.log('User info updated!')
  //   await db.delete(usersTable).where(eq(usersTable.email, user.email));
  //   console.log('User deleted!')
}

main();

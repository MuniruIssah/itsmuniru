"use client"

import { profiles } from "@/data/profiles";
import { IProfile } from "@/types";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RelatedProfiles = ({ currentProfile,simple=false }: { currentProfile?: string ,simple?:boolean}) => {
  const PERSONAL_PROFILE = "ningen_dewa_nai";
  const DO_NOT_SUGGEST = [PERSONAL_PROFILE, currentProfile];

  const companyProfiles = profiles.filter(
    (item) => !DO_NOT_SUGGEST.includes(item.handle)
  );

  const renderProfileItem = (profile: IProfile) => {
    const router=useRouter();
    return (
      <div className="flex gap-2.5" onClick={()=>router.push(`/profile/${profile.handle}`)}>
        <Avatar className="mt-1 w-11 h-11">
          <AvatarImage src={profile?.avatarUrl} className="object-cover" />
          <AvatarFallback>{profile?.name.charAt(0) ?? "SG"}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <Link href={`/profile/${profile?.handle}`}>
            <span className="font-bold">{profile?.name}</span>
          </Link>
          <span className="text-muted-foreground">@{profile?.handle}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 px-6 py-8 border-b">
      {!simple&&<span className="font-bold text-xl">Related Profiles</span>}
      {companyProfiles.map((item, index) => (
        <div key={index}>{renderProfileItem(item)}</div>
      ))}
    </div>
  );
};

export default RelatedProfiles;

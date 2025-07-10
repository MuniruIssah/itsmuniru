"use client";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import React from "react";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IProfile } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const PersonalDetailsSection = (profile: IProfile) => {
  return (
    <div>
      <div className={`w-full h-28 ${profile.coverGradient}`}></div>
        <Avatar className="-mt-12 ml-7 w-24 h-24 ring-4 ring-black">
          <AvatarImage src={profile?.avatarUrl} className="object-cover" />
          <AvatarFallback>
            {profile?.name.charAt(0) ?? "SG"}
          </AvatarFallback>
        </Avatar>
      <div className="flex flex-col gap-5 px-8 pt-4">
        
        <div>
          <h1 className="text-2xl font-extrabold leading-tight">
            {profile.name}
          </h1>
          <span className="text-muted-foreground">@{profile.handle}</span>
        </div>
        <p className="text-secondary-foreground">{profile.description}</p>

        <div className="flex items-center flex-wrap gap-x-5 gap-y-1.5">
          {profile.infoOrLink.map((item, index) => (
            <div key={index}>
              {item.link ? (
                <a
                  className="flex items-center gap-1.5 hover:underline hover:underline-offset-4 text-teal-500"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <div className="text-muted-foreground flex gap-1 items-center">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          {profile.stats.map((item, index) => (
            <div className="flex items-center gap-1" key={index}>
              <span className="font-extrabold">{item.value}</span>
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsSection;

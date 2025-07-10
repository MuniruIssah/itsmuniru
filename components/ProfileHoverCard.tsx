import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IProfile } from "@/types";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface IProfileHoverCard extends PropsWithChildren {
  profile: IProfile;
}
export const ProfileHoverCard = (props: IProfileHoverCard) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{props.children}</HoverCardTrigger>
      <HoverCardContent
        className="w-80 bg-background"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-3">
          <Link href={`/profile/${props.profile?.handle}`}>
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={props.profile.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>{props.profile.name[0]}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="space-y-3">
            <div>
              <Link href={`/profile/${props.profile?.handle}`}>
                <p className="font-bold">{props.profile.name}</p>
              </Link>
              <Link href={`/profile/${props.profile?.handle}`}>
                <h4 className="text-sm font-semibold text-muted-foreground">
                  @{props.profile.handle}
                </h4>
              </Link>
            </div>
            <p className="text-sm">{props.profile.description}</p>
            <div className="flex gap-4 text-sm">
              {props.profile.stats.map((item, index) => (
                <div className="flex items-center gap-1" key={index}>
                  <span className="font-extrabold">{item.value}</span>
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

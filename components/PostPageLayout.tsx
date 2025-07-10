import { IStack } from "@/data";
import React, { PropsWithChildren } from "react";
import Quote from "./Quote";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

interface IPostPageLayout extends PropsWithChildren {
}
const PostPageLayout = (props: IPostPageLayout) => {
  const {  children } = props;
  return (
    <div className="max-w-7xl mx-auto flex gap-x-8 max-h-[100vh]">
       <div className="flex-1 flex flex-col items-center justify-center">
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={"/images/galaxy.gif"}
              alt="galaxy"
              className="w-100"
              width={100}
              height={100}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>I still don't know what to do with this <span className="font-bold font-mono">SPACE</span></p>
          </TooltipContent>
        </Tooltip>
      </div>
      {children}
      <div className="w-full flex-1 flex flex-col gap-8 pt-10">
        <Quote/>
      </div>
    </div>
  );
};

export default PostPageLayout;

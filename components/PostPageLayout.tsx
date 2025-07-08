import { IStack } from "@/data";
import React, { PropsWithChildren } from "react";

interface IPostPageLayout extends PropsWithChildren {
}
const PostPageLayout = (props: IPostPageLayout) => {
  const {  children } = props;
  return (
    <div className="max-w-7xl mx-auto flex gap-x-8 max-h-[100vh]">
      <div className="flex-1"></div>
      {children}
      <div className="w-full flex-1 flex flex-col gap-8 pt-10">
      </div>
    </div>
  );
};

export default PostPageLayout;

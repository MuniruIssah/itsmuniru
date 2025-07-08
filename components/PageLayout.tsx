import { IStack } from "@/data";
import React, { PropsWithChildren } from "react";

interface IPageLayout extends PropsWithChildren {
  languagesAndFrameworks: IStack[];
  toolsAndOthers: IStack[];
}
const PageLayout = (props: IPageLayout) => {
  const { languagesAndFrameworks, toolsAndOthers, children } = props;
  return (
    <div className="max-w-7xl mx-auto flex gap-x-8 max-h-[100vh]">
      <div className="flex-1"></div>
      
      {children}
      <div className="w-full flex-1 flex flex-col gap-8 pt-10">
        <div className="border rounded-xl p-3 py-5">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Languages & Frameworks</span>
            <div className="flex gap-2 flex-wrap mt-2">
              {languagesAndFrameworks.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-slate-800  rounded-full py-1 px-2 sm:py-1.5 sm:px-3 hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer"
                >
                  {item.icon}
                  <span className="text-[13.5px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border rounded-xl p-3 py-5">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">Tools & Others</span>
            <div className="flex gap-2 flex-wrap mt-2">
              {toolsAndOthers.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-stone-800 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer"
                >
                  {item.icon}
                  <span className="text-[13.5px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;

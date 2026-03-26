import React from "react";
import { SectionTitleBox } from "../molecules/SectionTitleBox";
import { Filters } from "../atoms";

export const SectionHeader = () => {
  return (
    <div className="max-w-250 flex flex-col gap-6 justify-start pt-[40px] pb-[10px]">
      <SectionTitleBox />
      <Filters />
    </div>
  ); 
};

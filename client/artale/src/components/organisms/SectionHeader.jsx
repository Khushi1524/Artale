import React from "react";
import { SectionTitleBox } from "../molecules/SectionTitleBox";
import { Filters } from "../atoms";

export const SectionHeader = () => {
  return (
    <div className="max-w-250 flex flex-col gap-6 justify-start py-8">
      <SectionTitleBox />
      <Filters />
    </div>
  ); 
};

import React from "react";
import { ChipGroup } from "../molecules";
import { Typography } from "../atoms";

export const MMSectionHeader = () => {
  return (
    <div className="max-w-250 justify-start pb-2.5">
      <Typography varient={"h2"} className="text-[#233429] ">Discovery Feed</Typography>
      <Typography varient={"p"} className="text-[#233429] pt-3.5 pb-7">Find artwork that matches your feelings.</Typography>
      <ChipGroup />
    </div>
  );
};

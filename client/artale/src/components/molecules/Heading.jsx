import React from "react";
import { Typography } from "../atoms";

export const Heading = ({titleTxt, headingTxt, subheadingTxt}) => {
  return (
    <div className="pb-6">
      <Typography varient={"p"} className="leading-6 tracking-wide mb-1">{titleTxt}</Typography>
      <Typography varient={"h1"} className="max-w-140 leading-14 tracking-wide mb-1">{headingTxt}</Typography>
      <Typography varient={"p"} className="max-w-160 leading-6 tracking-wide">{subheadingTxt}</Typography>
    </div>
  );
};

import React from "react";
import { Typography } from "./Typography";

export const ModeBox = ({bgColor, btnColor}) => {
  return (
    <div className="hover:bg-[#f4f7f6] p-5 rounded-2xl cursor-pointer">
      <div className={`w-85 h-40 rounded-2xl p-2.5 mb-5 flex flex-col justify-between border border-[#dddfdd] ${bgColor}`}>
        <div>
          <div className="bg-[#e6e9e8] w-80 h-4.5 my-2 rounded-2xl"></div>
          <div className="bg-[#e6e9e8] w-60 h-4.5  my-2 rounded-2xl"></div>
        </div>
        <div className={`bg-[#506355] w-15 h-5.5 rounded-2xl ${btnColor}`}></div>
      </div> 
      <Typography varient={"h4"}>Light Mode</Typography>
      <Typography varient={"p"}>Lorem ipsum dolor sit amet consectetur.</Typography>
    </div>
  );
};

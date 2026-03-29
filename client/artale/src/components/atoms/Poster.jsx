import React from "react";
import { Typography } from "./Typography";
import { Button } from "./Button";

export const Poster = ({posterImg, artistProfileImg, artistName, artTitle}) => {
  return (
    <div className="group relative page-break-inside-[void] w-full">
      <img
        className="rounded-lg object-cover overflow-hidden w-full mb-7 cursor-pointer"
        src={posterImg.src}
      />
      <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-[#83978888] rounded-lg cursor-pointer">
        <div className="flex justify-between gap-15 items-center absolute top-0 left-0 ">
          <Typography varient={"p"} className="flex justify-start p-4 font-bold text-white">
            {artTitle}
          </Typography>
          <Button>Save</Button>
        </div>
        <div className="absolute bottom-0 right-2.5 flex items-center  gap-2 p-2.5 cursor-pointer">
          {/* <img className="w-8 h-8 rounded-[50%] object-cover" src={artistProfileImg.src} /> */}
          <Typography varient={"p"} className="font-semibold text-white">
            {artistName}
          </Typography>
        </div>
      </div>
    </div>
  );
};

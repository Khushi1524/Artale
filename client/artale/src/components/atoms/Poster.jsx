import React from "react";
import { Typography } from "./Typography";
import { Button } from "./Button";

export const Poster = ({ posterImg, artistProfileImg, artistName, artTitle, artMood }) => {
  return (
    <div className="group relative break-inside-avoid w-full">
      <img src={posterImg} alt={artTitle}
        className="rounded-lg object-cover w-full mb-7 cursor-pointer"
      />
      <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-[#83978888] rounded-lg cursor-pointer">
        
        <div className="flex justify-between items-center w-full p-4 absolute top-0 left-0">
          <Typography variant="p" className="font-bold text-white bg-[#6666667e] p-2 rounded">
            {artTitle}
          </Typography>
          <Button>Save</Button>
        </div>

        <div className="absolute bottom-0 right-2.5 flex items-center gap-2 p-4">
          <img
            src={artistProfileImg}
            alt={artistName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <Typography className="font-semibold text-white">
            {artistName}
          </Typography>
          <Typography className="text-xs bg-white/30 px-2 py-1 rounded text-white">
            {artMood}
          </Typography>
        </div>

      </div>
    </div>
  );
};

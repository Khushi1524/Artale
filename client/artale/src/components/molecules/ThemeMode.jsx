import React from "react";
import { IconButton, ModeBox, Typography } from "../atoms";
import { IoIosColorPalette } from "react-icons/io";

export const ThemeMode = () => {
  return (
    <div className=" max-w-220 w-full p-8 shadow-[0_0px_5px_rgba(0,0,0,0.2)]">
      <div className="flex gap-2 pb-5">
        <IconButton icon={<IoIosColorPalette />} varient={"default"}/>
        <Typography varient={"h4"}>Theme</Typography>
      </div>
      <div className="flex justify-between gap-10">
        <ModeBox bgColor="bg-white" />
        <ModeBox bgColor="bg-[#737373]" btnColor="bg-[#ABABAB]" />
      </div>
    </div>
  );
};

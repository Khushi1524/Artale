import React from "react";
import { SearchBox } from "../molecules";
import { Avatar, IconButton } from "../atoms";
import { FaRegBell } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-99 shadow-[0_0px_5px_rgba(0,0,0,0.2)] bg-white">
      <div className="flex items-center justify-between gap-10 py-3 max-w-300 mx-auto px-18">
        <SearchBox />
        <div className="flex items-center gap-4">
          <IconButton icon={<FaRegBell/>} varient={"circle"}/>
          <Avatar /> 
        </div>
      </div>
    </div>
  );
};

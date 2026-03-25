import React from "react";
import { SearchBox } from "../molecules";
import { BellIcon, Profile } from "../atoms";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-240 py-3">
      <SearchBox />
      <div className="flex items-center gap-5">
        <BellIcon />
        <Profile />
      </div>
    </div>
  );
};

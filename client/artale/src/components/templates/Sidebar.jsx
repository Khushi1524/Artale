import React from "react";
import { MenuList } from "../molecules/MenuList";
import logo from "../../assets/artale-logo-resized.png";
import { menuListArr, THEME } from "../../constants";
import { Button } from "../atoms";

export const Sidebar = () => {
  return (
    <div className="bg-[#839788] max-w-66.25 py-5 px-5 pb-26.75 flex flex-col items-start fixed">
        <img className="w-47.5 h-auto object-cover cursor-pointer" src={logo} alt="logo" />
        <MenuList menuItems={menuListArr} />
        <Button>Create a Story</Button>
    </div>
  );
};

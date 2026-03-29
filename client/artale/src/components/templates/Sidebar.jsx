import React from "react";
import { MenuList } from "../molecules/MenuList";
import logo from "../../assets/artale-logo-resized.png";
import { menuListArr, THEME } from "../../constants";
import { Button, Typography } from "../atoms";
import { useNavigate } from 'react-router-dom';


export const Sidebar = ({varient = "default"}) => {
  const navigate = useNavigate()

  if(varient != "default"){
    return(
      <div>
        <Typography varient={"h2"}></Typography>
        <Typography varient={"p"}></Typography>
      </div>
    )
  }
  return (
    <div className="bg-[#839788] max-w-68 py-5 px-5 pb-26.75 flex flex-col items-start sticky top-0 h-svh">
      <img className="w-47.5 h-auto object-cover cursor-pointer" src={logo} alt="logo"/>

          <MenuList menuItems={menuListArr(navigate)} />
          <Button>Create a Story</Button>
    </div>
  );
};

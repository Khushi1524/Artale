import React from "react";
import { Typography } from "./Typography";

export const IconButton = ({ icon, children, varient, onClick }) => {
  if (varient === "circle") {
    return (
      <div
        onClick={onClick}
        className="bg-[#a1d8b275] w-11 h-11 rounded-[50%] py-3 px-3 flex items-center justify-center cursor-pointer"
      >
        {icon}
      </div>
    );
  } else if (varient === "default") {
    return <div className="text-[#3b4b3f] text-3xl">{icon}</div>;
  }
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-start gap-3  mb-2 py-2.5 px-4 cursor-pointer hover:bg-[#f5f5f575] rounded-[10px]"
    >
      <div className="text-white text-xl"> {icon}</div>
      <Typography varient={"p"} className="text-white">
        {children}
      </Typography>
    </div>
  );
};

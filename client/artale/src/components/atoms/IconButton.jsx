import React from "react";
import { Typography } from "./Typography";

export const IconButton = ({ icon, children }) => {
  return (
    <div className="flex items-center justify-start gap-3  mb-2 py-2.5 px-4 cursor-pointer hover:bg-[#f5f5f575] 
    rounded-[10px]">
      <div className="text-white text-xl"> {icon}</div>
      <Typography varient={"p"}>{children}</Typography>
    </div>
  );
};

import React from "react";
import { THEME } from "../../constants";

export const Button = ({ varient, color, children, className="" }) => {
  const background = varient === "primary" ? THEME.PRIMARY : THEME.SECONDARY;
  const textColor =
    color || varient === "primary" ? THEME.SECONDARY : THEME.PRIMARY;

  return (
    <button style={{ background, color: textColor }} 
    className={`text-white font-bold py-2 px-4 rounded border-2 cursor-pointer outline-none ${className}`} >
      {children}
    </button>
  );
};

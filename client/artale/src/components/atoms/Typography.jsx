import React from "react";

export const Typography = ({ varient, children, className="" }) => {
  switch (varient) {
    case "h1":
      return <h1 className={`text-5xl text-[#3b4b3f] ${className}`}>{children}</h1>;
    case "h2":
      return <h2 className={`text-4xl text-[#3b4b3f] ${className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`text-3xl text-[#3b4b3f] ${className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`text-2xl text-[#3b4b3f] ${className}`}>{children}</h4>;
    case "p":
      return <p className={`text-[16px] text-[#233429] ${className}`}>{children}</p>;
    case "small":
      return <small className={`text-[14px] ${className}`}>{children}</small>;
    default:
      return <></>;
  }
};

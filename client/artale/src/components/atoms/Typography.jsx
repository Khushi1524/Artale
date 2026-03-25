import React from "react";

export const Typography = ({ varient, children }) => {
  switch (varient) {
    case "h1":
      return <h1 className="text-7xl text-[#40514e]">{children}</h1>;
    case "h2":
      return <h2 className="text-6xl text-[#40514e]">{children}</h2>;
    case "h3":
      return <h3 className="text-5xl text-[#40514e]">{children}</h3>;
    case "h4":
      return <h4 className="text-4xl text-white">{children}</h4>;
    case "p":
      return <p className="text-[16px] text-[white]">{children}</p>;
       case "h4-b":
      return <h4 className="text-4xl text-[#40514e]">{children}</h4>;
    case "p-b":
      return <p className="text-[16px] text-[#40514e]">{children}</p>;
    case "ul":
      return <ul className="list-none">{children}</ul>;
    case "li":
      return <li className="text-[16px] text-[#40514e]">{children}</li>;
    case "small":
      return <small className="text-sm text-[#40514e]">{children}</small>;
    default:
      return <></>;
  }
};

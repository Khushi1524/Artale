import React from "react";
import HeroBg from "../../assets/hero1.jpg";
import { GlassCard } from "../molecules";

export const Hero = () => {
  return (
    <div
      className="shadow-[0_0px_5px_rgba(0,0,0,0.2)] p-10 rounded-[20px] bg-cover bg-center  bg-no-repeat min-h-108 flex flex-col justify-end"
      style={{ backgroundImage: `url(${HeroBg})` }}>
      <GlassCard />
    </div>
  );
};

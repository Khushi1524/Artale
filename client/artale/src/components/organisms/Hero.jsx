import React from "react";
import HeroBg from "../../assets/hero-section-bg.jpg";
import { GlassCard } from "../molecules";

export const Hero = () => {
  return (
    <div>
      <div className="p-10 rounded-[20px] bg-cover bg-center  bg-no-repeat min-w-260 min-h-108 flex flex-col justify-end" style={{ backgroundImage: `url(${HeroBg})` }}>
        <GlassCard/>
      </div>
    </div>
  );
};

import React from "react";

export const Filters = () => {
  return (
    <div>
      <ul className="list-none flex flex-wrap items-center gap-2.5">
        <li className="font-bold text-[#8c8d8d]">MOODS:</li>
        <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#d3ab9e52] border-2 border-[#d3ab9e]">All</li>
        <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#f7df5654] border-2 border-[#f7df56]">Sunny</li>
        <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#a0ced973] border-2 border-[#a0ced9]">Calm</li>
        <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#f686bc5e]  border-2 border-[#f686bd]">Heart</li>
         <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#a1d8b275]  border-2 border-[#a1d8b2]">Reflect</li>
        <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#d4c1ec86]  border-2 border-[#d4c1ec]">Dream</li>
        <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#83978854]  border-2 border-[#839788]">Gloomy</li>
        <li className="py-2  px-5.5 rounded-[22px]  cursor-pointer bg-[#ff938b54]  border-2 border-[#ff928b]">Storm</li>
      </ul>
    </div>
  );
};

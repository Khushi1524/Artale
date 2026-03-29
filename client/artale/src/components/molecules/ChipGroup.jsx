import React from "react";
import { Chip } from "../atoms";

export const ChipGroup = () => {
  return (
      <ul className="list-none flex flex-wrap items-center gap-2.5 pb-3">
        <li className="font-bold text-[#8c8d8d]">MOODS:</li>
        <Chip>All</Chip>
        <Chip>Sunny</Chip>
        <Chip>Calm</Chip>
        <Chip>Heart</Chip>
        <Chip>Reflect</Chip>
        <Chip>Dream</Chip>
        <Chip>Gloomy</Chip>
        <Chip>Strom</Chip>
      </ul>
  );
};

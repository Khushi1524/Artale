import React from "react";
import { Chip } from "../atoms";

export const ChipGroup = ({onMoodSelect}) => {
  return (
    <ul className="list-none flex flex-wrap items-center gap-2.5 pb-3">
      <li className="font-bold text-[#8c8d8d]">MOODS:</li>
      <Chip onClick={() =>{onMoodSelect("All".toLowerCase())}}>All</Chip>
      <Chip onClick={() =>{onMoodSelect("sunny".toLowerCase())}}>Sunny</Chip>
      <Chip onClick={() =>{onMoodSelect("calm".toLowerCase())}}>Calm</Chip>
      <Chip onClick={() =>{onMoodSelect("Heart".toLowerCase())}}>Heart</Chip>
      <Chip onClick={() =>{onMoodSelect("Reflect".toLowerCase())}}>Reflect</Chip>
      <Chip onClick={() =>{onMoodSelect("Dream".toLowerCase())}}>Dream</Chip>
      <Chip onClick={() =>{onMoodSelect("Gloomy".toLowerCase())}}>Gloomy</Chip>
      <Chip onClick={() =>{onMoodSelect("Strom".toLowerCase())}}>Strom</Chip>
    </ul>
  );
};

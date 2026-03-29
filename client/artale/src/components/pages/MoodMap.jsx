import React from "react";
import { ChipGroup, Heading, PosterGroup } from "../molecules";
import { Button } from "../atoms";

export const MoodMap = () => {
  return (
    <div>
      <Heading headingTxt={"Explore Art Through Your Emotions."} subheadingTxt={"Discover visuals that align with how you feel. Let your mood guide you to meaningful artistic experiences."} />
      <ChipGroup />
      <PosterGroup />
      <div className="text-center">
        <Button varient={"primary"}>Load More</Button>
      </div>
    </div>
  );
};

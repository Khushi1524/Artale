import React, { useState } from "react";
import { ChipGroup, Heading, PosterGroup } from "../molecules";
import { Button } from "../atoms";
import { PosterData } from "../../constants";

export const MoodMap = () => {

  const [selectedMood, setSelectedMood] = useState("all");
  const filteredPosters = selectedMood === "all" ? PosterData : PosterData.filter((p)=> p.artMood === selectedMood)

  return (
    <div>
      <Heading headingTxt={"Explore Art Through Your Emotions."} subheadingTxt={"Discover visuals that align with how you feel. Let your mood guide you to meaningful artistic experiences."} />
      
      <ChipGroup onMoodSelect={setSelectedMood} />
      <PosterGroup AllPosters={filteredPosters} />

      <div className="text-center">
        <Button varient={"primary"}>Load More</Button>
      </div>
    </div>
  );
};

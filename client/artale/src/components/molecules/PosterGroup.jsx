import React from "react";
import { Poster } from "../atoms";
import { PosterData } from "../../constants";

export const PosterGroup = ({ AllPosters }) => {
  return (
    <div className="columns-3 gap-4">
      {AllPosters?.map((poster) => (
        <Poster
          key={poster.id}
          posterImg={poster.posterImg}
          artistProfileImg={poster.artistProfileImg}
          artistName={poster.artistName}
          artTitle={poster.artTitle}
        />
      ))}

      {/* <Poster posterImg={MMimg1} artistProfileImg={user} artistName={"CH SK"} artTitle={"The demon princess"} artMood={"Calm"} />
      <Poster posterImg={MMimg2} artistProfileImg={user} artistName={"CH SK"} artTitle={"The Abstract"}
      artMood={"Heart"} />
      <Poster posterImg={MMimg3} artistProfileImg={user} artistName={"CH SK"} artTitle={"The Tale"}
      artMood={"calm"} />
      <Poster posterImg={MMimg4} artistProfileImg={user} artistName={"CH SK"} artTitle={"Eve better"}
      artMood={"calm"} />
      <Poster posterImg={MMimg5} artistProfileImg={user} artistName={"CH SK"} artTitle={"Wall Art"}
      artMood={"Dream"}/>
      <Poster posterImg={MMimg6} artistProfileImg={user} artistName={"CH SK"} artTitle={"Dandillions"} 
      artMood={"gloomy"}/>
      <Poster posterImg={MMimg7} artistProfileImg={user} artistName={"CH SK"} artTitle={"Flamingo"} 
      artMood={"reflect"}/>
      <Poster posterImg={MMimg8} artistProfileImg={user} artistName={"CH SK"} artTitle={"Horse Boho"} 
      artMood={"sunny"}/>
      <Poster posterImg={MMimg9} artistProfileImg={user} artistName={"CH SK"} artTitle={"The Beauty"} 
      artMood={"strom"}/>
      <Poster posterImg={MMimg10} artistProfileImg={user} artistName={"CH SK"} artTitle={"Leamons wall"}
      artMood={"sunny"}/>
      <Poster posterImg={MMimg11} artistProfileImg={user} artistName={"CH SK"} artTitle={"Boho Ease"}
      artMood={"Dream"}/> */}
    </div>
  );
};

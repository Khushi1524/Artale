import React from "react";
import {Poster } from "../atoms";
import MMimg1 from "../../assets/MMimg1.jpg";
import MMimg2 from "../../assets/MMimg2.jpg";
import MMimg3 from "../../assets/MMimg3.jpg";
import MMimg4 from "../../assets/MMimg4.jpg";
import MMimg5 from "../../assets/MMimg5.jpg";
import MMimg6 from "../../assets/MMimg6.jpg";
import MMimg7 from "../../assets/MMimg7.jpg";
import MMimg8 from "../../assets/MMimg8.jpg";
import MMimg9 from "../../assets/MMimg9.jpg";
import MMimg10 from "../../assets/MMimg10.jpg";
import MMimg11 from "../../assets/MMimg11.jpg";

export const PosterGroup = () => {
  return (
    <div className="columns-3 gap-4">
      <Poster src={MMimg1} />
      <Poster src={MMimg2} />
      <Poster src={MMimg3} />
      <Poster src={MMimg4} />
      <Poster src={MMimg5} />
      <Poster src={MMimg6} />
      <Poster src={MMimg7} />
      <Poster src={MMimg8} />
      <Poster src={MMimg9} />
       <Poster src={MMimg10} />
       <Poster src={MMimg11} />
    </div>
  );
};

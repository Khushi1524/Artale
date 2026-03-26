import React from "react";
import {SingleMMimg } from "../atoms";
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

export const MMimgCollection = () => {
  return (
    <div className="columns-3 gap-4 px-14">
      <SingleMMimg src={MMimg1} />
      <SingleMMimg src={MMimg2} />
      <SingleMMimg src={MMimg3} />
      <SingleMMimg src={MMimg4} />
      <SingleMMimg src={MMimg5} />
      <SingleMMimg src={MMimg6} />
      <SingleMMimg src={MMimg7} />
      <SingleMMimg src={MMimg8} />
      <SingleMMimg src={MMimg9} />
       <SingleMMimg src={MMimg10} />
       <SingleMMimg src={MMimg11} />
    </div>
  );
};

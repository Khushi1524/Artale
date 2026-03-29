import React from "react";
import MMimg1 from "../../assets/MMimg1.jpg";
import MMimg2 from "../../assets/MMimg2.jpg";
import { Typography } from "../atoms";
import { ImageCard } from "../molecules";

export const Gallery = () => {
  return (
    <>
      <Typography varient={"p"}>ARCHIVE 01 --</Typography>
      <Typography varient={"h2"} className="uppercase">Dimensions of Art</Typography>
      <Typography varient={"p"}>
        Discover the many ways creativity takes shape through different forms of art, where each style, medium, and expression reflects unique perspectives, emotions, and stories that connect us all.
      </Typography>
      <div className="">
        <ImageCard src={MMimg1} />
        <ImageCard src={MMimg2} />
      </div>
    </>
  );
};

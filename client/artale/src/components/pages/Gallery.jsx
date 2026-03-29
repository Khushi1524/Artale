import React from "react";
import MMimg1 from "../../assets/MMimg1.jpg";
import MMimg2 from "../../assets/MMimg2.jpg";
import { Heading, ImageCard } from "../molecules";

export const Gallery = () => {
  return (
    <>
    <Heading titleTxt={"ARCHIVE 01 ──"} headingTxt={"Discover Different Types of Artistic Expressions."} subheadingTxt={"From abstract to modern, explore a range of styles. Understand how each form represents creativity differently.Art Through Different Creative Styles."}/>
      <div className="flex flex-col gap-10">
        <ImageCard src={MMimg1} />
        <ImageCard src={MMimg2} className="flex-row-reverse" />
      </div>
    </>
  );
};

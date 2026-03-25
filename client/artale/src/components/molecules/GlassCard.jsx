import React from "react";
import { Button, Typography } from "../atoms";

export const GlassCard = () => {
  return (
    <div>
      <div className="bg-[#f5f5f545] backdrop-blur-[6px] max-w-140 rounded-[20px] p-5 border border-white flex flex-col gap-2.5">
        <Typography varient={"p"}>Story of the day</Typography>

        <Typography varient={"h4"}>The Whispering Forest</Typography>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolore
          animi similique enim culpa nihil deserunt consequatur facere odio,
          possimus porro sit eveniet numquam! Officia iure quia perferendis
          beatae unde?
        </p>
        <div className="flex gap-5 items-center">
          <Button>Read Story</Button>
          <Typography varient={"p"}>by the author name</Typography>
        </div>
        
      </div>
    </div>
  );
};

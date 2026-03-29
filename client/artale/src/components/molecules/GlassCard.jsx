import React from "react";
import { Button, Typography } from "../atoms";

export const GlassCard = () => {
  return (
    <div className="bg-[#96959579] backdrop-blur-[6px] max-w-140 rounded-[20px] p-6 border border-white flex flex-col gap-2.5">
      <Typography varient={"p"} className="text-white">Story of the day</Typography>

      <Typography varient={"h2"} className="text-white font-bold">The Whispering Life</Typography>
      <Typography varient={"p"} className="line-clamp-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius, itaque similique aliquam quae voluptatum. Quaerat tempore ducimus esse dolor.Quaerat tempore ducimus esse dolor.rat tempore ducimus esse dolor. .Quaerat temp ucimus esse dolor.</Typography>
      <div className="flex gap-5 items-center">
        <Button>Read Story</Button>
        <Typography varient={"p"} className="text-white">-by Khushi Tiwari</Typography>
      </div>
    </div>
  );
};

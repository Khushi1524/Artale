import React from "react";

export const Poster = (singlemmsrc) => {
  return (
    <div className="page-break-inside-[void]">
      <img
        className="rounded-lg object-cover overflow-hidden w-full mb-7 cursor-pointer"
        src={singlemmsrc.src}
      />
    </div>
  );
};

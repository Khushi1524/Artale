import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBox = () => {
  return (
    <div className="relative">
      <input
        className="shadow-2xl border-2 border-[#ccc] rounded-full w-175 py-2.5 px-3 placeholder-[#ccc] outline-none text-[#40514e]  "
        type="text"
        placeholder="Search Any Artwork Here eg.Madhubani painting"
      />
      <div  className="text-[#cac8c8] text-2xl absolute top-2.5 right-6">
        <FaSearch />
      </div>
    </div>
  );
};

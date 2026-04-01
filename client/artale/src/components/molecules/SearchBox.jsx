import React  from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBox = () => {

  // const [searchText, setSearchText] = useState("");

  // const searchHandle = ()=>{
  //   const result = 
  // }

  return (
    <div className="relative w-[60%]">
      <input
        className="shadow-2xl border-2 border-[#ccc] rounded-[5px] w-full py-2 px-3 placeholder-[#ccc] outline-none text-[#40514e]"
        type="text"
        placeholder="Search Any Artwork Here eg.Abstract ART"
        // value={searchText}
        // onChange={(e)=>{
        //   setSearchText(e.target.value);
        // }}
      />
      <div className="text-[#cac8c8] text-2xl absolute top-2.5 right-6 cursor-pointer">
        <FaSearch />
      </div>
    </div>
  );
};

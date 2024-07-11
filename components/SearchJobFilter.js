import React from "react";
import AlignContainer from "./AlignContainer";

const SearchJobFilter = () => {
  return (
    <div className="bg-white  md:p-4 p-2 w-min  font-Poppins xs:text-md flex  flex-row lg:gap-5 gap-1 rounded-2xl ">
      <form>
        {/* <div className="flex flex-row items-center rounded-xl  pl-2 pr-5 py-2 bg-grey  gap-3 "> */}
        <div className="flex flex-row text-sm items-center font-semiBold font-Poppins text-black p-2 bg-grey  gap-1 rounded-lg">
          <div className="w-4">
            <img src="/icons/search.svg" />
          </div>
          <div>
            <input
              type="search"
              placeholder="Job title or Keyword"
              className="bg-grey w-[130px] outline-none rounded-sm text-[12px]"
            />
          </div>
        </div>
      </form>
      {/* <div className="flex flex-row items-center rounded-xl bg-grey  pl-2 pr-16 py-2 gap-3"> */}
      <div className="flex flex-row text-sm items-center font-semiBold font-Poppins text-black bg-grey  gap-1 rounded-lg">
        <div className="w-4">
          <img src="/icons/location.svg" />
        </div>
        <div>
          <select className="outline-none bg-grey text-[12px]" select="">
            <option value="" hidden="hidden">
              Location
            </option>
            <option value="lebanon">Lebanon</option>
            <option value="russia">Russia</option>
            <option value="uae">UAE</option>
            <option value="uk">UK</option>
          </select>
        </div>
      </div>
      {/* <button className="text-white bg-green outline-none rounded-xl    px-6 py-2 font-Poppins font-semibold"> */}
      <button className="text-white bg-green outline-none rounded-xl   text-[12px] px-4 py-2 font-Poppins font-semibold">
        Search
      </button>
    </div>
  );
};

export default SearchJobFilter;

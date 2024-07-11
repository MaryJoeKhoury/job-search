import React from "react";
import AlignContainer from "./AlignContainer";

const SearchJobFilter = () => {
  return (
    <div className="bg-white md:p-4 p-2 w-min  font-Poppins xs:text-md flex text-sm flex-row lg:gap-5 gap-1 rounded-2xl ">
      <form>
        <div className="flex flex-row items-center rounded-xl  md:pl-2 md:pr-5 md:py-2 bg-grey  md:gap-3 gap-1  p-2">
          <div className="w-4">
            <img src="/icons/search.svg" />
          </div>
          <div>
            <input
              type="search"
              placeholder="Job title or Keyword"
              className="bg-grey md:w-[175px] w-[125px] md:text-[1rem] text-[11px] outline-none"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-row items-center rounded-xl bg-grey  pl-2 md:pr-5 py-2 pr-2 md:gap-3 gap-1">
        <div className="w-4">
          <img src="/icons/location.svg" />
        </div>
        <div>
          <select
            className="outline-none bg-grey md:text-[1rem] text-[11px] "
            select=""
          >
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
      <button className="text-white bg-green outline-none rounded-xl md:text-[1rem] text-[11px]    px-4 py-2 font-Poppins font-semibold">
        {/* <button className="text-white bg-green outline-none rounded-xl   text-[12px] px-4 py-2 font-Poppins font-semibold"> */}
        Search
      </button>
    </div>
  );
};

export default SearchJobFilter;

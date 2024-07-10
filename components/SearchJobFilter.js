import React from "react";
import AlignContainer from "./AlignContainer";

const SearchJobFilter = () => {
  return (
    <div className="bg-white md:p-5 p-2 w-min   flex flex-row lg:gap-5 gap-1 rounded-2xl ">
      <form>
        <div className="flex flex-row items-center rounded-xl   bg-grey px-4 lg:px-6 md:py-4  py-2 gap-3 ">
          <img src="/icons/search.svg" />
          <input
            type="search"
            placeholder="Job title or Keyword"
            className="bg-grey outline-none"
          />
        </div>
      </form>
      <div className="flex flex-row items-center rounded-xl bg-grey  md:pl-6  md:pr-20 md:py-4 py:2 pr-10 pl-6 gap-3">
        <img src="/icons/location.svg" />
        <select className="outline-none bg-grey" select="">
          <option value="" hidden="hidden">
            Location
          </option>
          <option value="lebanon">Lebanon</option>
          <option value="russia">Russia</option>
          <option value="uae">UAE</option>
          <option value="uk">UK</option>
        </select>
      </div>
      <button className="text-white bg-green outline-none rounded-xl lg:py-4 lg:px-7 py-2 px-3 font-Poppins font-semibold">
        Search
      </button>
    </div>
  );
};

export default SearchJobFilter;

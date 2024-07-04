import React from "react";
import AlignContainer from "./AlignContainer";

const SearchJobFilter = () => {
  return (
    <div className="bg-white p-5 w-min  flex flex-row gap-5 rounded-2xl ">
      <form>
        <div className="flex flex-row items-center rounded-xl   bg-grey  px-6 py-4 gap-3">
          <img src="/icons/search.svg" />
          <input
            type="search"
            placeholder="Job title or Keyword"
            className="bg-grey outline-none"
          />
        </div>
      </form>
      <div className="flex flex-row items-center rounded-xl bg-grey w-fit pl-6  pr-20 py-4 gap-3">
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
      <button className="text-white bg-green outline-none rounded-xl py-4 px-7 font-Poppins font-semibold">
        Search
      </button>
    </div>
  );
};

export default SearchJobFilter;

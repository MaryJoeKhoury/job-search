import React from "react";
import AlignContainer from "./AlignContainer";

const SearchJobFilter = () => {
  return (
    <div className="flex w-min flex-row gap-1 rounded-2xl bg-white p-2 font-Poppins text-sm xs:text-sm sm:p-4 lg:gap-5">
      <form>
        <div className="flex flex-row items-center gap-1 rounded-xl bg-[#F9F9F9] p-2 sm:gap-3 sm:py-2 sm:pl-2 sm:pr-8">
          <div className="w-4">
            <img src="/icons/search.svg" />
          </div>
          <div>
            <input
              type="search"
              placeholder="Job title or Keyword"
              className="w-[125px] bg-[#F9F9F9] text-[11px] outline-none sm:w-[175px] sm:text-[1rem]"
            />
          </div>
        </div>
      </form>
      {/* <div className="flex flex-row items-center rounded-xl bg-[#F9F9F9]  pl-2 sm:pr-14 py-2 pr-2 sm:gap-3 gap-1"> */}
      {/* <div className="w-4">
          <img src="/icons/location.svg" />
        </div> */}
      <div>
        <select
          className="appearance-none rounded-xl bg-[#F9F9F9] bg-[url('/icons/location.svg'),url('/icons/drop-down.svg')] bg-[position:0.4em_center,90px] bg-no-repeat py-2 pl-10 pr-4 text-[11px] outline-none xs:bg-[position:0.4em_center,120px] xs:pr-14 sm:text-[1rem]"
          select=""
        >
          <option value="" hidden="hidden">
            Location
          </option>
          <option
            value="lebanon"
            className="appearance-none checked:bg-green checked:bg-opacity-80 checked:text-white"
          >
            Lebanon
          </option>
          <option
            value="russia"
            className="appearance-none checked:bg-green checked:bg-opacity-80 checked:text-white"
          >
            Russia
          </option>
          <option
            value="uae"
            className="appearance-none checked:bg-green checked:bg-opacity-80 checked:text-white"
          >
            UAE
          </option>
          <option
            value="uk"
            className="appearance-none checked:bg-green checked:bg-opacity-80 checked:text-white"
          >
            UK
          </option>
        </select>
      </div>
      {/* </div> */}
      {/* <div className="flex flex-row gap-3 items-center text-black font-semibold ">
        <div className=" bg-grey w-52 flex flex-row items-center  pl-2  rounded-xl cursor-pointer">
          <div className="w-4">
            <img src="/icons/location.svg" />
          </div>
          <p>Location</p>
          <img src="/icons/drop-down.svg" />
        </div>
        <div>
          <ul>
            <li>Lebanon</li>
            <li>Russia</li>
            <li>UAE</li>
            <li>UK</li>
          </ul>
        </div>
      </div> */}

      <button className="rounded-xl bg-green px-4 py-2 font-Poppins text-[11px] font-semibold text-white outline-none sm:text-[1rem]">
        {/* <button className="text-white bg-green outline-none rounded-xl   text-[12px] px-4 py-2 font-Poppins font-semibold"> */}
        Search
      </button>
    </div>
  );
};

export default SearchJobFilter;

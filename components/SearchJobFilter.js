import React from "react";
import AlignContainer from "./AlignContainer";

const SearchJobFilter = () => {
  return (
    <div className="bg-white sm:p-4 p-2 w-min  font-Poppins xs:text-sm flex text-sm flex-row lg:gap-5 gap-1 rounded-2xl ">
      <form>
        <div className="flex flex-row items-center rounded-xl  sm:pl-2 sm:pr-8 sm:py-2 bg-[#F9F9F9]  sm:gap-3 gap-1  p-2">
          <div className="w-4">
            <img src="/icons/search.svg" />
          </div>
          <div>
            <input
              type="search"
              placeholder="Job title or Keyword"
              className="bg-[#F9F9F9] sm:w-[175px] w-[125px] sm:text-[1rem] text-[11px] outline-none"
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
          className="outline-none bg-[#F9F9F9] bg-[url('/icons/location.svg'),url('/icons/drop-down.svg')] bg-no-repeat appearance-none   pl-10 xs:pr-14 pr-4 py-2 sm:text-[1rem] xs:bg-[position:0.4em_center,120px] bg-[position:0.4em_center,90px] rounded-xl text-[11px] "
          select=""
        >
          <option value="" hidden="hidden">
            Location
          </option>
          <option
            value="lebanon"
            className="checked:bg-green checked:bg-opacity-80 appearance-none checked:text-white"
          >
            Lebanon
          </option>
          <option
            value="russia"
            className="checked:bg-green checked:bg-opacity-80 appearance-none checked:text-white"
          >
            Russia
          </option>
          <option
            value="uae"
            className="checked:bg-green checked:bg-opacity-80 appearance-none checked:text-white"
          >
            UAE
          </option>
          <option
            value="uk"
            className="checked:bg-green checked:bg-opacity-80 appearance-none checked:text-white"
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

      <button className="text-white bg-green outline-none rounded-xl sm:text-[1rem] text-[11px]    px-4 py-2 font-Poppins font-semibold">
        {/* <button className="text-white bg-green outline-none rounded-xl   text-[12px] px-4 py-2 font-Poppins font-semibold"> */}
        Search
      </button>
    </div>
  );
};

export default SearchJobFilter;

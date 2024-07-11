import React from "react";
import AlignContainer from "./AlignContainer";
import NavBar from "./NavBar";
import SearchJobFilter from "./SearchJobFilter";
import BannerMessage from "./BannerMessage";
import Statistics from "../components/svgs/Statistics";
import SearchFolder from "./svgs/SearchFolder";
import Shield from "./svgs/Shield";
const HeroArea = (props) => {
  return (
    <>
      {/* <div className="mb-4 md:bg-grey bg-[#FBFBFB]"> */}
      <div className=" 3xl:bg-[linear-gradient(90deg,_#FBFBFB_65%,_#00CC99_0)] md:bg-[linear-gradient(90deg,_#FBFBFB_60%,_#00CC99_0)] bg-[linear-gradient(180deg,_#FBFBFB_50%,_#00CC99_0)] ">
        <NavBar />
        <AlignContainer>
          <div className="flex flex-col items-center   md:items-start md:flex-row ">
            <div className=" md:mt-44 mt-24  lg:w-3/5 md:w-3/4 ">
              <div className="flex flex-col justify-between items-center md:items-start">
                <div>
                  <BannerMessage />
                </div>
                <div className="">
                  <SearchJobFilter />
                </div>
              </div>
            </div>

            <div className=" lg:w-2/5 md:w-1/4  w-full  md:mt-[-6rem]    justify-around md:justify-between md:bg-opacity-100 md:bg-green items-start md:rounded-bl-3xl">
              <div className="bg-white w-fit  p-4 rounded-lg  md:mt-72 xl:ml-[26rem] lg:ml-[19rem]  md:ml-28 rotate-6 mt-56 ml-auto sm:ml-96  ">
                <Statistics />
              </div>
              <div className="bg-white w-fit p-4 rounded-lg -rotate-[4deg]  lg:ml-24 md:-mt-40 md:ml-4 -mt-32 ml-12 ">
                <SearchFolder />
              </div>
              <div className="bg-white w-fit  p-4 rounded-lg lg:ml-16 md:mt-44 -rotate-[5deg] mb-44 md:ml-0 mt-48 ml-8 ">
                <Shield />
              </div>
            </div>
          </div>
        </AlignContainer>
      </div>
    </>
  );
};

export default HeroArea;

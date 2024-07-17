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
      <div className="bg-[linear-gradient(180deg,_#FBFBFB_50%,_#00CC99_0)] md:bg-[linear-gradient(90deg,_#F2F2F2_80%,_#00CC99_0)] 5xl:bg-[linear-gradient(90deg,_#F2F2F2_60%,_#00CC99_0)]">
        <NavBar />
        <AlignContainer>
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="mt-24 md:mt-28 md:w-3/5">
              <div className="flex flex-col items-center justify-between md:items-start">
                <div>
                  <BannerMessage />
                </div>
                <div className="w-full">
                  <SearchJobFilter />
                </div>
              </div>
            </div>

            <div className="w-full items-start justify-around md:-mt-24 md:w-2/5 md:justify-between md:rounded-bl-[50px] md:bg-green md:bg-opacity-100">
              <div className="ml-auto mt-72 flex h-20 w-20 rotate-6 items-center justify-center rounded-lg bg-white p-4 md:mt-72">
                <Statistics />
              </div>
              <div className="-ml-2 -mt-48 flex h-20 w-20 -rotate-[4deg] items-center justify-center rounded-lg bg-white p-4 md:-mt-48 md:ml-4 lg:ml-24">
                <SearchFolder />
              </div>
              <div className="mb-44 ml-4 mt-48 flex h-20 w-20 -rotate-[5deg] items-center justify-center rounded-lg bg-white p-4 md:ml-2 md:mt-44 lg:ml-16">
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

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
      <div className="3xl:bg-[linear-gradient(90deg,_#F2F2F2_65%,_#00CC99_0)] bg-[linear-gradient(180deg,_#FBFBFB_50%,_#00CC99_0)] md:bg-[linear-gradient(90deg,_#F2F2F2_60%,_#00CC99_0)]">
        <NavBar />
        <AlignContainer>
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="mt-24 md:mt-44 md:w-3/4 lg:w-3/5">
              <div className="flex flex-col items-center justify-between md:items-start">
                <div>
                  <BannerMessage />
                </div>
                <div className="">
                  <SearchJobFilter />
                </div>
              </div>
            </div>

            <div className="w-full items-start justify-around md:mt-[-6rem] md:w-1/4 md:justify-between md:rounded-bl-3xl md:bg-green md:bg-opacity-100 lg:w-2/5">
              <div className="ml-auto mt-56 w-fit rotate-6 rounded-lg bg-white p-4 md:mt-72">
                <Statistics />
              </div>
              <div className="-mt-32 ml-12 w-fit -rotate-[4deg] rounded-lg bg-white p-4 md:-mt-40 md:ml-4 lg:ml-24">
                <SearchFolder />
              </div>
              <div className="mb-44 ml-8 mt-48 w-fit -rotate-[5deg] rounded-lg bg-white p-4 md:ml-0 md:mt-44 lg:ml-16">
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

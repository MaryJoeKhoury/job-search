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
      <div className="xl:bg-[linear-gradient(90deg,_#F2F2F2_61%,_#00CC99_0)] xs:bg-[linear-gradient(180deg,_#FBFBFB_50%,_#00CC99_0)] bg-[linear-gradient(180deg,_#FBFBFB_50%,_#00CC99_0)]  3xl:bg-[linear-gradient(90deg,_#F2F2F2_58%,_#00CC99_0)] md:bg-[linear-gradient(90deg,_#F2F2F2_85%,_#00CC99_0)]">
        <NavBar />
        <AlignContainer>
          <div className="flex flex-col items-center  lg:gap-16 gap-72 md:gap-2 md:items-start md:flex-row ">
            <div className=" md:mt-44 mt-24  ">
              <div className="flex flex-col justify-between items-center md:items-start">
                <div>
                  <BannerMessage />
                </div>
                <div>
                  <SearchJobFilter />
                </div>
              </div>
            </div>

            <div className=" w-full  mt-[-6rem]  justify-around md:justify-between md:bg-opacity-100 md:bg-green items-start md:rounded-bl-[50px]">
              <div className="bg-white w-fit  p-4 rounded-lg  md:mt-72 xl:ml-[30rem] lg:ml-[19rem]  md:ml-40 rotate-3 xs:mt-8 xs:ml-96 ml-60  ">
                <Statistics />
              </div>
              <div className="bg-white w-fit p-4 rounded-lg -rotate-[4deg]  lg:ml-24 md:-mt-40 md:ml-16 xs:-mt-52 xs:ml-24 -mt-44 ml-10 ">
                <SearchFolder />
              </div>
              <div className="bg-white w-fit  p-4 rounded-lg lg:ml-16 md:mt-44 -rotate-[5deg] mb-44 md:ml-10 xs:mt-36 xs:ml-14 mt-36 ml-8 ">
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

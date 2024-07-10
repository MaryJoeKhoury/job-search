import React from "react";
import AlignContainer from "./AlignContainer";
import NavBar from "./NavBar";
import SearchJobFilter from "./SearchJobFilter";
import BannerMessage from "./BannerMessage";

const HeroArea = (props) => {
  return (
    <>
      {/* <div className="mb-4 md:bg-grey bg-[#FBFBFB]"> */}
      <div className="xl:bg-[linear-gradient(90deg,_#F2F2F2_61%,_#00CC99_0)] bg-[linear-gradient(180deg,_#FBFBFB_55%,_#00CC99_0)] 3xl:bg-[linear-gradient(90deg,_#F2F2F2_58%,_#00CC99_0)] md:bg-[linear-gradient(90deg,_#F2F2F2_85%,_#00CC99_0)]">
        <NavBar />
        <AlignContainer>
          <div className="flex flex-col items-center lg:gap-2 xl:gap-16 gap-96 md:gap-2 md:items-start md:flex-row ">
            <div className=" mt-44 w-9/12">
              <div className="flex flex-col justify-between">
                <div>
                  <BannerMessage />
                </div>
                <div>
                  <SearchJobFilter />
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-row md:items-center lg:gap-0 gap-32 xl:gap-52 md:gap-4 mt-[-6rem]  justify-around md:justify-between md:bg-opacity-100 md:bg-green items-start md:rounded-bl-[50px]">
              <div className="flex flex-col lg:gap-52 gap-24 md:gap-96 ">
                <div>
                  <img
                    src="/icons/search-folder.svg"
                    className="bg-white lg:p-6 rounded-xl md:mt-40 p-3 md:ml-8 ml-10 rotate-[-4deg]"
                  />
                </div>
                <div>
                  <img
                    src="/icons/shield.svg"
                    className="bg-white lg:p-6 p-3 rounded-xl  lg:mb-44 mb-44 md:mb-20 ml-4 rotate-[-4deg]"
                  />
                </div>
              </div>
              {/* <div> */}
              <img
                src="/icons/statistic.svg"
                className="bg-white lg:p-6 p-3 rounded-xl rotate-6 mt-10"
              />
              {/* </div> */}
            </div>
          </div>
        </AlignContainer>
      </div>
    </>
  );
};

export default HeroArea;

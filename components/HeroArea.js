import React from "react";
import AlignContainer from "./AlignContainer";
import NavBar from "./NavBar";
import SearchJobFilter from "./SearchJobFilter";
import BannerMessage from "./BannerMessage";

const HeroArea = (props) => {
  return (
    <>
      <NavBar />

      {/* <div className="mb-4 md:bg-grey bg-[#FBFBFB]"> */}
      <div className=" bg-grey ">
        <AlignContainer>
          <div className="flex flex-col items-center gap-40 md:items-start md:flex-row ">
            <div className=" mt-44 w-9/12">
              <div>
                <BannerMessage />
              </div>
              <div>
                <SearchJobFilter />
              </div>
            </div>

            <div className=" w-full flex flex-row items-center gap-52  md:rounded-bl-[50px]">
              <div className="flex flex-col gap-52">
                <div>
                  <img
                    src="/icons/search-folder.svg"
                    className="bg-white p-6 rounded-xl mt-40 ml-24 rotate-[-4deg]"
                  />
                </div>
                <div>
                  <img
                    src="/icons/shield.svg"
                    className="bg-white p-6 rounded-xl mb-44 ml-16 rotate-[-4deg]"
                  />
                </div>
              </div>
              {/* <div> */}
              <img
                src="/icons/statistic.svg"
                className="bg-white p-6 rounded-xl rotate-6"
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

import React from "react";
import AlignContainer from "./AlignContainer";
import NavBar from "./NavBar";
import SearchJobFilter from "./SearchJobFilter";
import BannerMessage from "./BannerMessage";

const HeroArea = (props) => {
  return (
    <>
      <NavBar />
      <div className="mb-4 flex-wrap md:bg-grey bg-[#FBFBFB]">
        <AlignContainer>
          <div className="flex flex-col md:items-center  md:flex-row">
            <div className="md:w-9/12 ">
              <BannerMessage />
              <SearchJobFilter />
            </div>

            <div className=" w-full">
              <img src="/images/hero-image.png" className=" hidden md:block" />
              <img
                src="/images/hero-image-mobile.png"
                className=" block md:hidden w-full mt-4"
              />
            </div>
          </div>
        </AlignContainer>
      </div>
    </>
  );
};

export default HeroArea;

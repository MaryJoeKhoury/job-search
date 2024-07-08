import React from "react";
import AlignContainer from "./AlignContainer";
import NavBar from "./NavBar";
import SearchJobFilter from "./SearchJobFilter";
import BannerMessage from "./BannerMessage";

const HeroArea = (props) => {
  return (
    <>
      <div className="">
        {/* <div className="lg:bg-[url('/images/hero.png')] bg-no-repeat bg-center ">/ */}
        <NavBar />
        <img
          src="/images/hero.png"
          className="w-full md:block hidden absolute top-0 right-0 z-[-1]"
        />
        <AlignContainer>
          <div className="flex flex-col justify-center md:items-start items-center pt-16 md:pt-44 bg-[#FBFBFB] md:bg-opacity-0">
            <BannerMessage />
            <SearchJobFilter />
          </div>
        </AlignContainer>

        <div className=" w-full">
          <img
            src="/images/hero-image-mobile.png"
            className=" block md:hidden w-full "
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default HeroArea;

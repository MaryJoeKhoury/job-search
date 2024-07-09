import React from "react";
import AlignContainer from "./AlignContainer";
import NavBar from "./NavBar";
import SearchJobFilter from "./SearchJobFilter";
import BannerMessage from "./BannerMessage";

const HeroArea = (props) => {
  return (
    <>
      <div className="bg-red-500">
        {/* <div className="lg:bg-[url('/images/hero.png')] bg-no-repeat bg-center ">/ */}
        <NavBar />
        <div className="mb-4 flex-wrap md:bg-grey bg-[#FBFBFB]">
          <AlignContainer>
            <div className="flex flex-col md:items-center  md:flex-row xl:py-[202px] lg:py-[190px] md:py-48">
              <div className="md:w-9/12 ">
                <BannerMessage />
                <SearchJobFilter />
              </div>
            </div>
          </AlignContainer>
          <div className=" w-full">
            <img
              src="/images/hero-image.png"
              className=" hidden md:block absolute top-0 xl:right-[-50px] lg:right-[-270px] md:right-[-550px]"
            />
            <img
              src="/images/hero-image-mobile.png"
              className=" block md:hidden w-full mt-4"
            />
          </div>
        </div>

        {/* <div className=" w-full">
            <img
              src="/images/hero-image.png"
              className=" md:block hidden absolute top-0 right-0 z-[-1]"
            />
            <img
              src="/images/hero-image-mobile.png"
              className=" block md:hidden w-full "
            />
          </div> */}
      </div>
    </>
  );
};

export default HeroArea;

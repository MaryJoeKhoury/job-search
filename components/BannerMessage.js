import React from "react";
import AlignContainer from "./AlignContainer";

const BannerMessage = () => {
  return (
    <div className="text-center font-Poppins md:text-left">
      <h1 className="text-3xl font-bold sm:text-[2.75rem] xl:text-5xl">
        {/* {props.slogan} */}
        Search, Find , & Apply
      </h1>
      {/* <p>{props.description}</p> */}
      <p className="text-md 3xl:pr-96 mb-9 mt-6 px-1 sm:text-xl md:mb-14 md:mt-12 md:pr-16 xl:pr-36">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  );
};

export default BannerMessage;

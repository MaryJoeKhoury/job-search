import React from "react";
import AlignContainer from "./AlignContainer";

const BannerMessage = () => {
  return (
    <div className=" text-center md:text-left ">
      <h1 className="text-4xl font-bold sm:text-5xl  ">
        {/* {props.slogan} */}
        Search, Find , & Apply
      </h1>
      {/* <p>{props.description}</p> */}
      <p className="text-lg  sm:text-xl md:mt-8 md:mb-14 mt-6 mb-9  md:w-9/12 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  );
};

export default BannerMessage;

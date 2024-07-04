import React from "react";

const BannerMessage = () => {
  return (
    <div className="w-full text-center md:text-left ">
      <h1 className="text-4xl font-bold sm:text-5xl mt-48  ">
        {/* {props.slogan} */}
        Search, Find , & Apply
      </h1>
      {/* <p>{props.description}</p> */}
      <p className="text-xl  sm:text-xl mt-8 mb-14 md:w-9/12  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  );
};

export default BannerMessage;

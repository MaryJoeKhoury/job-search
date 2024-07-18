import React from "react";
import Cards from "./Cards";

export const Card = (props) => {
  return (
    <div
      className={`group flex cursor-pointer flex-col items-start justify-center gap-4 rounded-3xl pr-8 pt-8 ${props.paddingWrap} bg-white text-center font-Poppins ${props.width} ${props.hover} hover:duration-500`}
    >
      <div className="h-full w-full md:w-full">
        {/* <img src={props.icon} className="group-hover:bg-red-50" /> */}
        {props.icon}
      </div>
      <div>
        <h1
          className={`text-start font-Poppins text-[14px] font-semibold xs:text-xl ${props.padding} `}
        >
          {props.title}
        </h1>
      </div>
      <div
        className={`text-start font-Poppins text-xs ${props.groupHover} ${props.descriptionColor} md:text-[10px]`}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
};

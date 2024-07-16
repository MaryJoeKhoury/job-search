import React from "react";
import Cards from "./Cards";

export const Card = (props) => {
  return (
    <div
    className={`mt-12 flex  flex-col justify-center items-start text-center rounded-3xl py-8 px-4 gap-2  ${props.backgroundColor} ${props.width} `}>
      <div className="md:w-10 w-7">
        <img src={props.icon} />
      </div>
      <div>
        <h1
          className={`text-start xs:text-xl   text-[14px] font-semibold font-Poppins ${props.padding}`}
        >
          {props.title}
        </h1>
      </div>
      <div className="text-start xs:text-sm text-[10px] text-[#8A8A8A] md:pr-14  xs:pr-4">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

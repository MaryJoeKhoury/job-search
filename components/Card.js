import React from "react";
import Cards from "./Cards";

export const Card = (props) => {
  return (
    <div
      className={`mt-12 flex flex-col items-start justify-center gap-2 rounded-3xl px-4 py-8 text-center font-Poppins ${props.backgroundColor} ${props.width} `}
    >
      <div className="w-7 md:w-10">
        <img src={props.icon} />
      </div>
      <div>
        <h1
          className={`text-start font-Poppins text-[14px] font-semibold xs:text-xl ${props.padding}`}
        >
          {props.title}
        </h1>
      </div>
      <div className="text-start font-Poppins text-[10px] text-[#8A8A8A] xs:pr-4 xs:text-sm md:pr-14">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

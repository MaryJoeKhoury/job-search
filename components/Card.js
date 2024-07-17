import React from "react";
import Cards from "./Cards";

export const Card = (props) => {
  return (
    <div
      className={`flex cursor-pointer flex-col items-start justify-center gap-4 rounded-3xl bg-red-400 px-8 py-8 text-center font-Poppins ${props.backgroundColor} ${props.width} `}
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
      <div className="text-start font-Poppins text-xs text-[#8A8A8A] md:text-[10px]">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

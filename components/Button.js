import React from "react";
import Arrow from "./svgs/Arrow";

const Button = (props) => {
  return (
    <button
      className={`group flex w-fit flex-row items-center rounded-lg border-2 border-solid ${props.borderColor} px-8 py-3 font-Poppins text-lg font-semibold ${props.textColor}`}
    >
      <p>{props.content}</p>
      {/* <img
        src="/icons/arrow.svg/"
        className="opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100"
      /> */}
      <Arrow
        className={`opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100 ${props.fillColor}`}
      />
    </button>
  );
};

export default Button;

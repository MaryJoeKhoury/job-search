import React from "react";

const Button = (props) => {
  return (
    <button className="group flex w-fit flex-row items-center rounded-lg border-2 border-solid border-green px-8 py-3 font-Poppins text-lg font-semibold text-green">
      <p>{props.content}</p>
      <img
        src="/icons/arrow.svg/"
        className="opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100"
      />
    </button>
  );
};

export default Button;

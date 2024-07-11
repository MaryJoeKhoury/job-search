import React from "react";

const Button = (props) => {
  return (
    <button className="border-green border-2 w-fit border-solid rounded-lg px-10 py-4 font-Poppins font-semibold text-green text-xl">
      <p>{props.content}</p>
    </button>
  );
};

export default Button;

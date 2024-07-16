import React from "react";

const Button = (props) => {
  return (
    <button className="border-green border-2 w-fit border-solid rounded-lg px-8 py-3 font-Poppins font-semibold text-green text-lg">
      <p>{props.content}</p>
    </button>
  );
};

export default Button;

import React from "react";

const Button = (props) => {
  return (
    <button className="border-green border-2 border-solid rounded-lg px-8 py-4 font-Poppins font-semibold text-green text-xl">
      {props.content}
    </button>
  );
};

export default Button;

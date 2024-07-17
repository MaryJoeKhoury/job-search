import React from "react";

const Button = (props) => {
  return (
    <button className="w-fit rounded-lg border-2 border-solid border-green px-8 py-3 font-Poppins text-lg font-semibold text-green">
      <p>{props.content}</p>
    </button>
  );
};

export default Button;

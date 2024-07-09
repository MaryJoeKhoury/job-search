import React from "react";

const Cards = (props) => {
  return (
    <div className="mt-12 flex md:w-1/4 w-2/5 flex-col justify-center items-start text-center rounded-3xl py-8 px-4 gap-2 bg-white ">
      {props.children}
    </div>
  );
};

export default Cards;

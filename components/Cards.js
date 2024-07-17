import React from "react";

const Cards = (props) => {
  return (
    <div
      className={`mt-12 flex w-[155px] flex-col items-start justify-center gap-2 rounded-3xl bg-white px-4 py-8 text-center xs:w-[49%] md:w-2/5 lg:w-[30%] xl:w-1/4 ${props.backgroundColor} `}
    >
      {props.children}
    </div>
  );
};

export default Cards;

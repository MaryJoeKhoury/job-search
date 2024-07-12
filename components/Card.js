import React from "react";
import Cards from "./Cards";

export const Card = (props) => {
  return (
    <Cards>
      <div>
        <img src={props.icon} />
      </div>
      <div>
        <h1 className="text-start text-xl font-semibold font-Poppins">
          {props.title}
        </h1>
      </div>
      <div className="text-start text-sm text-[#8A8A8A] md::pr-14  pr-4">
        <p>{props.description}</p>
      </div>
    </Cards>
  );
};

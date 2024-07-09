import React from "react";
import Cards from "./Cards";

export const Card = (props) => {
  return (
    <Cards>
      <div>
        <img src={props.icon} />
      </div>
      <div>
        <h1 className="text-start text-2xl font-semibold font-Poppins">
          {props.title}
        </h1>
      </div>
      <div>
        <p className="text-start text-[#8A8A8A]">{props.description}</p>
      </div>
    </Cards>
  );
};

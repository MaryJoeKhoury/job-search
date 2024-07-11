import React from "react";
import AlignContainer from "./AlignContainer";

const CardContainer = (props) => {
  return (
    <div className="mt-4 flex flex-row gap-2 align-middle xs:justify-between xl:flex-nowrap flex-wrap cursor-pointer">
      {props.children}
    </div>
  );
};

export default CardContainer;

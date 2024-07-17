import React from "react";
const CardContainer = (props) => {
  return (
    <div className="flex cursor-pointer flex-row flex-wrap justify-between gap-8 align-middle xl:flex-nowrap">
      {props.children}
    </div>
  );
};

export default CardContainer;

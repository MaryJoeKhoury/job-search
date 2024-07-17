import React from "react";
const CardContainer = (props) => {
  return (
    <div className="mt-4 flex cursor-pointer flex-row flex-wrap justify-between gap-2 align-middle xl:flex-nowrap">
      {props.children}
    </div>
  );
};

export default CardContainer;

import React from "react";

const AlignContainer = (props) => {
  return (
    <div
      className={
        "alignement sm-alignement xs-alignement m-auto  md:max-w-3xl lg:max-w-5xl md:px-1 xl:max-w-7xl  lg:px-8 xl:px-8 " ||
        props.className
      }
    >
      {props.children}
    </div>
  );
};

export default AlignContainer;

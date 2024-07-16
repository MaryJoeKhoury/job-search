import React from "react";

const AlignContainer = (props) => {
  return (
    <div
      className={
        "alignement sm-alignement xs-alignement m-auto max-w-80 xs:max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl md:px-3 xl:max-w-7xl  lg:px-8 xl:px-8 5xl:max-w-[20]" ||
        props.className
      }
    >
      {props.children}
    </div>
  );
};

export default AlignContainer;

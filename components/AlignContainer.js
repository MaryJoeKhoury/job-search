import React from "react";

const AlignContainer = (props) => {
  return (
    <div
      className={
        "alignement sm-alignement xs-alignement m-auto sm:px-12 md:px-0 lg:max-w-7xl lg:px-12 xl:px-3" ||
        props.className
      }
    >
      {props.children}
    </div>
  );
};

export default AlignContainer;

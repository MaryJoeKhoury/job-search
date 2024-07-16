import React from "react";

const SectionTitle = (props) => {
  return (
    <h1
      className={`${props.aligntext}  font-Poppins  font-semibold sm:text-3xl text-2xl `}
    >
      {props.title}
    </h1>
  );
};

export default SectionTitle;

import React from "react";

const SectionTitle = (props) => {
  return (
    <h1 className={`${props.aligntext}  font-Poppins  font-semibold text-3xl `}>
      {props.title}
    </h1>
  );
};

export default SectionTitle;

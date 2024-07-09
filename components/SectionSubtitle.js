import React from "react";

const SectionSubtitle = (props) => {
  return (
    <p className={`text-[#8A8A8A]  w-9/12 text-lg my-8 ${props.aligntext}`}>
      {props.subtitle}
    </p>
  );
};

export default SectionSubtitle;

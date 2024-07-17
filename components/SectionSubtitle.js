import React from "react";

const SectionSubtitle = (props) => {
  return (
    <p
      className={`text-[#8A8A8A] ${props.padding} mb-14 mt-10 font-Poppins text-sm md:text-lg ${props.aligntext}`}
    >
      {props.subtitle}
    </p>
  );
};

export default SectionSubtitle;

import React from "react";
import SectionSubtitle from "./SectionSubtitle";

const FeedbackCard = (props) => {
  return (
    <div className="flex flex-row">
      <SectionSubtitle subtitle={props.subtitle} />
      <div>
        <p>{props.description}</p>
        <img src={props.image} />
      </div>
    </div>
  );
};

export default FeedbackCard;

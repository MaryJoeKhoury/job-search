import React from "react";
import SectionSubtitle from "./SectionSubtitle";

const FeedbackCard = (props) => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <SectionSubtitle subtitle={props.subtitle} />
          <p>{props.description}</p>
          <div>
            <h3>{props.reviewer}</h3>
            <h5>{props.profession}</h5>
          </div>
        </div>
        <div className="flex flex-row">
          <img src={props.image} />
        </div>
      </div>
      <div className="flex flex-row">
        <img src="/icons/backward-button.svg" className="h-12 w-12" />
        <img src="/icons/forward-button.svg" className="h-12 w-12" />
      </div>
    </>
  );
};

export default FeedbackCard;

import React from "react";
import SectionSubtitle from "./SectionSubtitle";

const FeedbackCard = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between font-Poppins">
        <div className="w-1/2">
          <SectionSubtitle subtitle={props.subtitle} />
          <div className="flex flex-col gap-14">
            <p className="text-lg font-semibold">{props.description}</p>
            <div>
              <h3 className="mb-4 text-xl font-semibold">{props.reviewer}</h3>
              <h5>{props.profession}</h5>
            </div>
            <div className="flex flex-row gap-8">
              <img src="/icons/backward-button.svg" className="h-12 w-12" />
              <img src="/icons/forward-button.svg" className="h-12 w-12" />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <img src={props.image} />
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;

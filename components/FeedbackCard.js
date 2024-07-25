import React, { useState } from "react";

const FeedbackCard = (props) => {
  const { feedbacks = [] } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (feedbacks.length === 0) {
    return;
  }
  const handleForwardButton = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };
  const handleBackwardButton = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length,
    );
  };

  const currentFeedback = feedbacks[currentIndex];

  return (
    <>
      <div className="mt-8 flex flex-row justify-between font-Poppins md:mt-12 xl:mt-4">
        <div className="md:w-9/12 lg:w-3/5 xl:w-1/2">
          <p
            className={`mb-10 p-0 text-center font-Poppins text-base text-[#8A8A8A] xs:px-8 md:mt-1 md:px-0 md:text-left md:text-lg`}
          >
            {currentFeedback.subtitle}
          </p>
          <div className="flex flex-col gap-14">
            <p className="p-0 text-center text-base font-medium xs:px-12 md:p-0 md:pr-2 md:text-left md:text-xl">
              {currentFeedback.description}
            </p>

            <img src={currentFeedback.image} className="block md:hidden" />

            <div>
              <h3 className="mb-3 text-center text-xl font-semibold md:text-left">
                {currentFeedback.reviewer}
              </h3>
              <h5 className="text-center font-Poppins text-base font-medium text-[#767373] md:text-left">
                {currentFeedback.profession}
              </h5>
            </div>
          </div>
          <div className="ml-1 mt-6 flex flex-row justify-center gap-6 md:justify-normal">
            <button onClick={handleBackwardButton}>
              <img src="/icons/backward-button.svg" className="h-12 w-12" />
            </button>
            <button onClick={handleForwardButton}>
              <img src="/icons/forward-button.svg" className="h-12 w-12" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex">
          <img src={currentFeedback.image} className="h-[90%] w-full" />
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;

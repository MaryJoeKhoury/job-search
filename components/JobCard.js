import React from "react";

const JobCard = (props) => {
  return (
    <div
      className={`mt-12 flex flex-col items-start justify-center gap-5 rounded-3xl px-4 py-8 text-center ${props.backgroundColor} ${props.width} `}
    >
      <div className="h-14 w-16 md:h-20 md:min-w-20">
        <img src={props.icon} />
      </div>
      <div>
        <h1 className="text-start font-Poppins text-[14px] font-semibold xs:text-xl">
          {props.title}
        </h1>
        <h5 className="text-start font-semibold text-[#8A8A8A]">
          {props.subtitle}
        </h5>
      </div>

      <div className={`text-start text-xs text-[#8A8A8A] ${props.padding}`}>
        <p>{props.description}</p>
      </div>

      <div className="text-sx flex flex-row items-center gap-3 rounded-xl font-Poppins text-[10px] font-semibold md:text-sm">
        <div className="flex flex-row items-center gap-1 rounded-lg bg-[#f9f9f9] px-2 py-2">
          <div className="w-4">
            <img src="/icons/location.svg" />
          </div>
          <div>
            <p>San Francisco,CA</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-1 rounded-lg bg-[#f9f9f9] px-2 py-2">
            <div className="w-4">
              <img src="/icons/bag.svg" />
            </div>
            <div>
              <p>Full Time</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-baseline gap-2 hover:cursor-pointer">
        <h3 className="font-semibold text-green hover:pr-1 hover:underline hover:transition-all hover:duration-300">
          Apply Now
        </h3>
        <img src="/icons/arrow.svg" className="w-1" />
      </div>
    </div>
  );
};

export default JobCard;

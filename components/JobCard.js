import React from 'react'

const JobCard = (props) => {
  return (
    <div
    className={`mt-12 flex  flex-col justify-center items-start text-center rounded-3xl py-8 px-4 gap-2  ${props.backgroundColor} ${props.width} `}>
      <div className="md:min-w-20 w-10">
        <img src={props.icon} />
      </div>
      <div>
        <h1
          className={`text-start xs:text-xl   text-[14px] font-semibold font-Poppins ${props.padding}`} >
          {props.title}
        </h1>
        
            </div>
            <div><h5 className='text-[#8A8A8A] font-semibold'>{props.subtitle}</h5></div>
      <div className="text-start text-xs  text-[#8A8A8A] ">
        <p>{props.description}</p>
      </div>
      <div>blalala</div>
      <div className="flex flex-row gap-2 items-center hover:cursor-pointer">
        <h3 className="hover:pr-1 hover:underline hover:transition-all text-green font-semibold hover:duration-300">
          Apply Now
       </h3>
        <img src="/icons/arrow.svg" className="w-2" />
      </div>
    </div>
  )
}

export default JobCard
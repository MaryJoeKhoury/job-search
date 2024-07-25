import React from "react";
import AlignContainer from "./AlignContainer";

const Footer = (props) => {
  return (
    <div
      className={`bg-green pb-24 pt-48 font-Poppins text-white ${props.position}`}
    >
      <AlignContainer>
        <div className="flex flex-row flex-wrap items-start justify-between gap-8">
          <div className="sm:mt-9 md:w-[30%] xl:w-1/5">
            <img src="/icons/logo-footer.svg" className="mb-6 h-10 w-48" />
            <p className="text-xs leading-6 xs:pr-12 sm:pr-40 md:pr-0 xl:pr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc do
              eiusmod tempor incididunt ut.
            </p>
          </div>
          <div className="line-h flex flex-row flex-wrap justify-between gap-8 xs:flex-nowrap lg:justify-center xl:justify-between">
            <div className="sm:w-3/5">
              <h1 className="mb-3 text-2xl font-bold text-white">Company</h1>
              <ul className="text-xs leading-7">
                <li>Address : 123 Fifth Avenue, New York - 1060,USA.</li>

                <a href="tel:123" className="group">
                  <li>
                    Call Us :{" "}
                    <span className="relative w-fit before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                      +(1600) 456 7890
                    </span>
                  </li>
                </a>
                <a href="mailto:test@outlook.com" className="group">
                  <li>
                    Email :{" "}
                    <span className="relative w-fit before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                      yourid@example.com
                    </span>
                  </li>
                </a>
                <li>Mon Sat : 9:00 AM 19:00 PM </li>
              </ul>
            </div>
            <div>
              <h1 className="mb-3 text-2xl font-bold text-white">Pages</h1>
              <ul className="text-xs leading-7">
                <a href="#" className="group flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                    Home
                  </li>
                </a>
                <a href="#" className="group flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                    Booking
                  </li>
                </a>

                <a href="#" className="group flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                    Facilities
                  </li>
                </a>
                <a href="#" className="group flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                    About Us
                  </li>
                </a>
                <a href="#" className="group flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                    Location
                  </li>
                </a>
                <a href="#" className="group flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li className="relative before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
                    Contact
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-2xl font-bold text-white">Contact Us</h1>
            <div className="flex flex-row gap-5">
              <a
                href="https://www.google.com/"
                target="_blank"
                className="group hover:duration-300"
              >
                <img
                  src="/icons/google.svg"
                  className="h-6 w-6 group-hover:opacity-70 group-hover:duration-300"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="group hover:duration-200"
              >
                <img
                  src="/icons/facebook.svg"
                  className="h-6 w-6 group-hover:opacity-70 group-hover:duration-300"
                />
              </a>
              <a
                href="https://www.x.com/"
                target="_blank"
                className="group hover:duration-200"
              >
                <img
                  src="/icons/twitter.svg"
                  className="h-6 w-6 group-hover:opacity-70 group-hover:duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="group hover:duration-200"
              >
                <img
                  src="/icons/linkedin.svg"
                  className="h-6 w-6 group-hover:opacity-70 group-hover:duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </AlignContainer>
    </div>
  );
};

export default Footer;

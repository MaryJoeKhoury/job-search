import React from "react";
import AlignContainer from "./AlignContainer";

const Footer = (props) => {
  return (
    <div
      className={`bg-green pb-24 pt-64 font-Poppins text-white ${props.position}`}
    >
      <AlignContainer>
        <div className="flex flex-row flex-wrap items-start justify-between gap-8">
          <div className="md:w-[30%]">
            <img src="/icons/logo-footer.svg" className="mb-6 h-10 w-48" />
            <p className="xs:pr-24 sm:p-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc do
              eiusmod tempor incididunt ut.
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-8 xs:flex-nowrap lg:justify-center xl:justify-between">
            <div className="sm:w-3/4">
              <h1 className="mb-3 text-2xl font-bold text-white">Company</h1>
              <ul>
                <a href="#">
                  <li>Address: 123 Fifth Avenue, New York - 1060,USA.</li>
                </a>
                <a href="#">
                  <li>Call Us: +(1600) 456 7890</li>
                </a>
                <a href="#">
                  <li>Email: yourid@example.com</li>
                </a>
                <li>Mon Sat : 9:00 AM 19:00 PM </li>
              </ul>
            </div>
            <div>
              <h1 className="mb-4 text-2xl font-bold text-white">Pages</h1>
              <ul>
                <a href="#" className="flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li>Home</li>
                </a>
                <a href="#" className="flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li>Booking</li>
                </a>
                <a href="#" className="flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li>Facilities</li>
                </a>
                <a href="#" className="flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li>About Us</li>
                </a>
                <a href="#" className="flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li>Location</li>
                </a>
                <a href="#" className="flex flex-row gap-2">
                  <img src="/icons/list-bullet.svg" />
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-2xl font-bold text-white">Contact Us</h1>
            <div className="flex flex-row gap-5">
              <a href="#">
                <img src="/icons/google.svg" />
              </a>
              <a href="#">
                <img src="/icons/facebook.svg" />
              </a>
              <a href="#">
                <img src="/icons/twitter.svg" />
              </a>
              <a href="#">
                <img src="/icons/linkedin.svg" />
              </a>
            </div>
          </div>
        </div>
      </AlignContainer>
    </div>
  );
};

export default Footer;

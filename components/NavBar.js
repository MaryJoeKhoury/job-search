import React, { useState, useEffect } from "react";
import AlignContainer from "./AlignContainer";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <AlignContainer>
        <nav className=" flex-row justify-between items-center pt-12 md:flex hidden px-2 bg-green-400 font-semibold font-Poppins">
          <div className="flex flex-row justify-between items-center">
            <img src="/icons/logo.svg" className="xl:mr-20 lg:mr-16 md:mr-6" />
            <ul className="flex flex-row">
              <li className="xl:mr-14 lg:mr-9 md:mr-4">
                <a href="#">Home</a>
              </li>
              <li className="xl:mr-14 lg:mr-9 md:mr-4">
                <a href="#">Job</a>
              </li>
              <li className="xl:mr-14 lg:mr-9 md:mr-4">
                <a href="#">About Us</a>
              </li>
              <li className="md:mr-3">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center">
            <p className="lg:mr-12 md:mr-4 text-white">
              <a href="#">Sign Up</a>
            </p>
            <div className="flex flex-row items-center bg-white py-3 px-6 rounded-lg">
              <img src="/icons/create-account.svg" className="mr-3" />
              <h1>
                <a href="#">Create account</a>
              </h1>
            </div>
          </div>
        </nav>
      </AlignContainer>
      <div
        className={`fixed right-0 top-0 flex h-screen w-full max-w-xs transform flex-col items-center justify-center bg-green text-center text-2xl md:hidden ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } z-10 transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-10">
          <li>
            <a href="#" className="font-bold text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-black">
              Job
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-black">
              About Us
            </a>
          </li>
          <li>
            <a className="font-bold text-black">Contact</a>
          </li>
          <li>
            <p className="lg:mr-12 md:mr-4 text-white">
              <a href="#">Sign Up</a>
            </p>
          </li>
          <li>
            <div className="flex flex-row items-center bg-white py-3 px-6 rounded-lg">
              <img src="/icons/create-account.svg" className="mr-3" />
              <h1>
                <a href="#">Create account</a>
              </h1>
            </div>
          </li>
        </ul>
      </div>

      <div className="align-middle md:hidden justify-center items-center py-10  flex bg-[#F2F2F2] px-0 w-full">
        <img src="/icons/logo.svg" className="mr-7" />

        <nav className="fixed right-0  bg-green rounded-md top-0 z-20 px-4  my-7 mr-7  xs:m-10 md:hidden">
          <div
            className={` relative h-14 px-5 cursor-pointer ${
              menuActive ? "active" : ""
            }`}
            id="ham-menu"
            onClick={handleMobileMenu}
          >
            <span className="absolute left-1/2 top-1/4 block h-1 w-11 -translate-x-1/2 transform rounded bg-white transition-all duration-300"></span>
            <span className="absolute right-[-1rem] top-1/2 block h-1 w-8 -translate-x-1/2 rounded bg-white transition-opacity duration-300"></span>
            <span className="absolute left-1/2 top-3/4 block h-1 w-11 -translate-x-1/2 transform rounded bg-white transition-all duration-300"></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

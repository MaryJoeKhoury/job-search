import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AlignContainer from "./AlignContainer";

const NavBar = () => {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);
  const handleMobileMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <div className="fixed z-10 w-full">
        <AlignContainer>
          <nav className=" flex-row justify-between items-center w-full pt-12 md:flex hidden  bg-green-400  font-semibold font-Poppins  ">
            <div className="flex flex-row justify-between items-center xl:gap-20 lg:gap-16 md:gap-6">
              <a href="#">
                <img src="/icons/logo.svg" />
              </a>
              <ul className="flex flex-row xl:gap-14 lg:gap-9 md:gap-4">
                <li>
                  <Link
                    href="/"
                    className={`link relative font-bold ${
                      pathname === "/"
                        ? " after:content-[''] h-10  text-opacity-100  text-black"
                        : ""
                    } after:content-[''] after:absolute relative after:h-[3px] after:w-0 after:bg-green after:duration-500
                     after:left-0 after:bottom-[-10px] before:content-[''] before:absolute  before:h-[3px] before:w-0 before:bg-green before:right-0 before:top-[-10px] before:duration-500 hover:after:w-full hover:before:w-full hover:text-opacity-100 text-opacity-50  text-black`}
                    // className="after:content-[''] after:absolute relative after:h-[3px] after:w-0 after:bg-green after:duration-500
                    //  after:left-0 after:bottom-[-10px] before:content-[''] before:absolute  before:h-[3px] before:w-0 before:bg-green before:right-0 before:top-[-10px] before:duration-500 hover:after:w-full hover:before:w-full hover:text-opacity-100 text-opacity-50  text-black "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="after:content-[''] after:absolute relative after:h-[3px] after:w-0 after:bg-green after:duration-500
                     after:left-0 after:bottom-[-10px] before:content-[''] before:absolute  before:h-[3px] before:w-0 before:bg-green before:right-0 before:top-[-10px] before:duration-500 hover:after:w-full hover:before:w-full hover:text-opacity-100 text-opacity-50  text-black "
                  >
                    Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="after:content-[''] after:absolute relative after:h-[3px] after:w-0 after:bg-green after:duration-500
                     after:left-0 after:bottom-[-10px] before:content-[''] before:absolute  before:h-[3px] before:w-0 before:bg-green before:right-0 before:top-[-10px] before:duration-500 hover:after:w-full hover:before:w-full hover:text-opacity-100 text-opacity-50  text-black "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="after:content-[''] after:absolute relative after:h-[3px] after:w-0 after:bg-green after:duration-500
                     after:left-0 after:bottom-[-10px] before:content-[''] before:absolute  before:h-[3px] before:w-0 before:bg-green before:right-0 before:top-[-10px] before:duration-500 hover:after:w-full hover:before:w-full hover:text-opacity-100 text-opacity-50  text-black "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center lg:gap-12 md:gap-4">
              <p className=" text-white">
                <a
                  href="#"
                  className="after:content-[''] after:absolute relative after:h-[3px] after:w-0 after:bg-white after:duration-500
                     after:left-0 after:bottom-[-10px] before:content-[''] before:absolute  before:h-[3px] before:w-0 before:bg-white before:right-0 before:top-[-10px] before:duration-500 hover:after:w-full hover:before:w-full "
                >
                  Sign Up
                </a>
              </p>
              <div className="flex flex-row items-center bg-white py-3 px-6 rounded-lg gap-3 group">
                <img
                  src="/icons/create-account.svg"
                  className="group-hover:rotate-[360deg] group-hover:duration-500"
                />
                <h1>
                  <a href="#">Create account</a>
                </h1>
              </div>
            </div>
          </nav>
        </AlignContainer>
      </div>
      <div
        className={`fixed right-0 top-0 flex h-screen w-full  transform flex-col items-center   bg-green text-center text-2xl md:hidden ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } z-10 transition-transform duration-300 ease-in-out`}
      >
        <li className="ml-auto mr-7 list-none">
          <img
            src="/icons/close.svg "
            className="w-8 ml-auto py-10 "
            onClick={handleMobileMenu}
          />
        </li>
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
            <p className="text-white">
              <a href="#">Sign Up</a>
            </p>
          </li>
          <li>
            <div className="flex flex-row items-center bg-white py-3 px-6 rounded-lg gap-3">
              <img src="/icons/create-account.svg" />
              <h1>
                <a href="#">Create account</a>
              </h1>
            </div>
          </li>
        </ul>
      </div>

      <ul className="align-middle md:hidden justify-center items-center py-10  flex bg-[#F2F2F2] px-0 w-full">
        <li className="first:mr-auto invisible">invisible</li>
        <li>
          <img src="/icons/logo.svg" />
        </li>
        <li className="last:ml-auto mr-4">
          {/* <button className="fixed right-0  bg-green rounded-md top-0 z-20 px-4  my-7 mr-7  xs:m-10 md:hidden"> */}
          <button className="   rounded-md bg-green p-3   md:hidden">
            <div
              className={` relative   cursor-pointer ${
                menuActive ? "active" : ""
              }`}
              id="ham-menu"
              onClick={handleMobileMenu}
            >
              <img src="/icons/navigation.svg " className="w-7 ml-auto " />
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default NavBar;

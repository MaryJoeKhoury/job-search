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
      <div className="w-full">
        <AlignContainer>
          <nav className="bg-green-400 hidden w-full flex-row items-center justify-between pt-12 font-Poppins font-semibold md:flex">
            <div className="flex flex-row items-center justify-between md:gap-4 lg:gap-16 xl:gap-20">
              <a href="#">
                <img src="/icons/logo.svg" />
              </a>
              <ul className="flex flex-row md:gap-2 lg:gap-9 xl:gap-14">
                <li>
                  <Link
                    href="/"
                    className={`link relative font-bold ${
                      pathname === "/"
                        ? "h-10 text-black text-opacity-100 after:content-['']"
                        : ""
                    } relative text-black before:absolute before:right-0 before:top-[-10px] before:h-[3px] before:w-0 before:bg-green before:duration-500 before:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-green after:duration-500 after:content-[''] hover:text-opacity-100 hover:before:w-full hover:after:w-full`}
                    // className="after:content-[''] after:absolute relative after:h-[3px] after:w-0 after:bg-green after:duration-500
                    //  after:left-0 after:bottom-[-10px] before:content-[''] before:absolute  before:h-[3px] before:w-0 before:bg-green before:right-0 before:top-[-10px] before:duration-500 hover:after:w-full hover:before:w-full hover:text-opacity-100 text-opacity-50  text-black "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative text-black before:absolute before:right-0 before:top-[-10px] before:h-[3px] before:w-0 before:bg-green before:duration-500 before:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-green after:duration-500 after:content-[''] hover:text-opacity-100 hover:before:w-full hover:after:w-full"
                  >
                    Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative text-black before:absolute before:right-0 before:top-[-10px] before:h-[3px] before:w-0 before:bg-green before:duration-500 before:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-green after:duration-500 after:content-[''] hover:text-opacity-100 hover:before:w-full hover:after:w-full"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative text-black before:absolute before:right-0 before:top-[-10px] before:h-[3px] before:w-0 before:bg-green before:duration-500 before:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-green after:duration-500 after:content-[''] hover:text-opacity-100 hover:before:w-full hover:after:w-full"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center md:gap-2 lg:gap-12">
              <p className="text-white">
                <a
                  href="#"
                  className="relative before:absolute before:right-0 before:top-[-10px] before:h-[3px] before:w-0 before:bg-white before:duration-500 before:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-[3px] after:w-0 after:bg-white after:duration-500 after:content-[''] hover:before:w-full hover:after:w-full"
                >
                  Sign In
                </a>
              </p>
              <div className="group z-10 flex flex-row items-center gap-3 rounded-lg bg-white px-6 py-3">
                <img
                  src="/icons/create-account.svg"
                  // className="group-hover:p group-hover:duration-500"
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
        className={`fixed right-0 top-0 flex h-screen w-full transform flex-col items-center bg-green text-center text-2xl md:hidden ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } z-10 transition-transform duration-300 ease-in-out`}
      >
        <li className="ml-auto mr-7 list-none">
          <img
            src="/icons/close.svg "
            className="ml-auto w-8 py-10"
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
              <a href="#">Sign In</a>
            </p>
          </li>
          <li>
            <div className="flex flex-row items-center gap-3 rounded-lg bg-white px-6 py-3">
              <img src="/icons/create-account.svg" />
              <h1>
                <a href="#">Create account</a>
              </h1>
            </div>
          </li>
        </ul>
      </div>

      <ul className="flex w-full items-center justify-center bg-[#F2F2F2] px-0 py-8 align-middle md:hidden">
        <li className="invisible first:mr-auto">invisible</li>
        <li>
          <img src="/icons/logo.svg" />
        </li>
        <li className="mr-4 last:ml-auto">
          {/* <button className="fixed right-0  bg-green rounded-md top-0 z-20 px-4  my-7 mr-7  xs:m-10 md:hidden"> */}
          <button className="rounded-md bg-green p-3 md:hidden">
            <div
              className={`relative cursor-pointer ${
                menuActive ? "active" : ""
              }`}
              id="ham-menu"
              onClick={handleMobileMenu}
            >
              <img src="/icons/navigation.svg " className="ml-auto w-7" />
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default NavBar;

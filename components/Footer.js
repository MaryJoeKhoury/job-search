import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <img src="/icons/logo.svg" className="h-10 w-48" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div>
        <h1>Company</h1>
        <ul>
          <li>Address: 123 Fifth Avenue, New York - 1060,USA.</li>
          <li>Call Us: +(1600) 456 7890</li>
          <li>Email: yourid@example.com</li>
          <li>Mon Sat</li>
        </ul>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;

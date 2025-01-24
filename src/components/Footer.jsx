import React from 'react';
import { footer } from "../data";

const Footer = () => {
  const { copyrightText, logo } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[175px] px-[20px]">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]"
      >
        {/* logo on the left */}
        <button aria-label="Home">
        <img src={logo} alt="GYM Logo" />
        </button>        
        {/* copyright text on the right */}
        <div className="text-neutral-300 text-sm text-right md:text-left">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

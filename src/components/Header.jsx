import React, { useEffect, useState } from "react";

// import data
import { header } from "../data";

// import compenent
// import { Nav, NavMobile } from "./index";
import Nav from '../components/Nav';
import NavMobile from "../components/NavMobile";
 
// import icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  // header state
  const [isActive, setIsAvtive] = useState(false);
  // nav mobile state
  const [navMobile, setNavmobile] = useState(false);

  const { logo } = header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsAvtive(true) : setIsAvtive(false);
    });
  }, []);
  return (
    <header
      className={`${isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
        } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto 
    flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      {/* logo */}
      <button aria-label="Home">
        <img src={logo} alt="logo" className="h-[30px]" />
      </button>

      {/* nav - initally hidden - show on desktop */}
      <Nav />
      {/* btns - initally hidden - show on desktop */}
      <div className="hidden lg:flex  space-x-4">
        <button className="btn btn-sm text-white">Log in </button>
        <button className="btn btn-sm bg-red-600 text-white">Sign in</button>
      </div>
      {/* navmobile btn open and close -hidden on desktop*/}
      {!navMobile ? (
        <div
          className="lg:hidden absolute right-4 cursor-pointer"
          onClick={() => setNavmobile(!navMobile)}
        >
          <RiMenu4Fill className="text-red-600 text-3xl" />
        </div>
      ) : (
        <div
          className="lg:hidden absolute right-4 cursor-pointer"
          onClick={() => setNavmobile(!navMobile)}
        >
          <RiCloseFill className="text-red-600 text-3xl" />
        </div>
      )}

      {/* nav mobile  - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;

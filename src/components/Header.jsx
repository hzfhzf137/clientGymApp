import React, { useEffect, useState } from "react";

// import data
import { header } from "../data";

// import components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

// import icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  const { logo } = header;

  // Function to open the form popup
  const handleOpenForm = () => {
    // Implement form logic here
    console.log("Join Now form opened");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
        } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto 
    flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      {/* Logo */}
      <button aria-label="Home">
        <img src={logo} alt="logo" className="h-[30px]" />
      </button>

      {/* Navigation for large screens */}
      <Nav onJoinNow={handleOpenForm} />

      {/* Mobile menu buttons */}
      {!navMobile ? (
        <div
          className="lg:hidden absolute right-4 cursor-pointer"
          onClick={() => setNavMobile(!navMobile)}
        >
          <RiMenu4Fill className="text-red-600 text-3xl" />
        </div>
      ) : (
        <div
          className="lg:hidden absolute right-4 cursor-pointer"
          onClick={() => setNavMobile(!navMobile)}
        >
          <RiCloseFill className="text-red-600 text-3xl" />
        </div>
      )}

      {/* Navigation for mobile screens */}
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} onJoinNow={handleOpenForm} />
    </header>
  );
};

export default Header;

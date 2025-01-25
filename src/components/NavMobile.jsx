import React from 'react';
import { X } from 'lucide-react'; // For close icon

// Example navigation data
const nav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Workouts', href: '#workouts' },
  { name: 'Pricing', href: '#pricing' },
];

const NavMobile = ({ navMobile, setNavMobile }) => {
  // Function to close the menu when a link is clicked
  const handleClose = () => {
    setNavMobile(false); // This will close the mobile menu
  };

  return (
    <nav
      className={`${
        navMobile ? 'h-screen' : 'h-0'
      } lg:hidden w-full bg-neutral-800 fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleClose} // Close menu on click
          className="text-white text-2xl transition-all duration-300 hover:text-red-600"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col justify-center items-center gap-y-6 py-12">
        {nav.map((item, index) => (
          <li key={index}>
            <a
              className="text-white text-lg px-3 py-1 rounded-md font-medium transition-all duration-300 hover:bg-red-600 hover:text-neutral-900"
              href={item.href}
              onClick={handleClose} // Close menu on link click
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;

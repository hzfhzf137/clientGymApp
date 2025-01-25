// import React from 'react';

// // Example navigation data
// const nav = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Workouts', href: '#workouts' },
//   { name: 'Pricing', href: '#pricing' },
// ];

// const NavMobile = ({ navMobile }) => {
//   return (
//     <nav
//       className={`${
//         navMobile ? 'h-screen' : 'h-0'
//       } lg:hidden w-full bg-neutral-800 fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300`}
//     >
//       <ul className="flex flex-col justify-center items-center gap-y-6 py-12">
//         {nav.map((item, index) => (
//           <li key={index}>
//             <a
//               className="text-white text-lg px-3 py-1 rounded-md font-medium transition-all duration-300 hover:bg-red-600 hover:text-neutral-900"
//               href={item.href} // Use href for anchor scrolling
//             >
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//       {/* Buttons */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button className="px-6 py-2 text-white border border-white rounded-md transition-all duration-300 hover:bg-red-600 hover:border-red-600">
//           Log in
//         </button>
//         <button className="px-6 py-2 text-white bg-red-600 rounded-md transition-all duration-300 hover:bg-primary-300">
//           Sign Up
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavMobile;

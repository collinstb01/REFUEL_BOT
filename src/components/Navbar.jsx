// import React from "react";
import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between py-[30px] px-[86px]">
//       <div>
//         <img src={img} alt="" />
//       </div>
//       <div className="flex justify-between items-center">
//         <p className="pr-[44px] font-medium">Home</p>
//         <p className="pr-[44px] font-medium">Features</p>
//         <p className="pr-[44px] font-medium">How it works</p>
//         <p className="pr-[44px] font-medium">Twitter</p>
//         <div className="yellow_btn">
//           <p>Get Started</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
// import { p } from "react-router-dom"; // Use react-router-dom for navigation
// import logo from "../assets/avatar-logo.png"; // Adjust the path to the logo image
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <nav className="fixed left-0 top-0 w-full z-[9999] ease-in duration-300 h-[88px] bg-[#ffffff] shadow-xl">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <p>
          {/* Use a regular img tag for the logo */}
          <img src={logo} className="w-32 cursor-pointer" alt="logo" />
        </p>
        <ul className="sm:flex hidden">
          <li className="p-4">
            <p className="text-black">Home</p>
          </li>
          <li className="p-4">
            <p className="text-black" >Features</p>
          </li>
          <li className="p-4">
            <p className="text-black" >How it works</p>
          </li>
          <li className="p-4">
            <p className="text-black">Twitter</p>
          </li>
          <div className="yellow_btn">
           <p>Get Started</p>
     </div>
        </ul>

        {/* Mobile button */}
        <div className="block sm:hidden z-[9999] text-black font-bold" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? "top-0 right-0 bottom-0 left-0 absolute flex justify-center items-center w-full h-screen bg-black sm:hidden text-center ease-in duration-300 z-[999]"
              : "top-0 right-0 bottom-0 left-[-100%] absolute flex justify-center items-center w-full h-screen bg-black sm:hidden text-center ease-in duration-300 z-[999]"
          }
        >
          <ul>
            <li className="p-4 text-xl hover:text-gray-500">
              <p>Home</p>
            </li>
            <li className="p-4 text-xl hover:text-gray-500">
              <p >Features</p>
            </li>
            <li className="p-4 text-xl hover:text-gray-500">
              <p >How it works</p>
              </li>
            <li className="p-4 text-xl hover:text-gray-500">
              <p >Twitter</p>
            </li>
            <div className="yellow_btn">
           <p>Get Started</p>
        </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

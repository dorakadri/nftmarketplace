import React from "react";
import styles from "../style";
import { Pixy } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[124px] h-[50px] -ml-6" src={Pixy} alt="logo" />
      <ul className="sm:flex hidden justify-end  sm:gap-x-5 lg:gap-x-8  ">
        {navLinks.map((nav, index) => (
          <li key={nav.id}   className="font-poppins font-normal  cursor-pointer text-[16px] text-white hover:text-secondary" >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <div className="divide-x flex ">
          <li className="pr-2 font-poppins font-normal cursor-pointer text-[16px] text-white">
            <a href="#">Login</a>
          </li>
          <li className="pl-2 font-poppins font-normal cursor-pointer text-[16px] text-secondary">
            <a href={`#`}>Register</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

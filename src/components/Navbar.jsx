import React, { useState } from "react";
import styles from "../style";
import { Pixy, menu, close } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[124px] h-[50px] -ml-6" src={Pixy} alt="logo" />
      <ul className="sm:flex hidden justify-end  sm:gap-x-5 lg:gap-x-8  ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-poppins font-normal  cursor-pointer text-[16px] text-white hover:text-secondary"
          >
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

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
           mb-4
            
            `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <div>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            mr-4
            
            `}
            >
              <a href="#">Login</a>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-secondary
           mr-4
           
           `}
            >
              <a href={`#`}>Register</a>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { top } from "../constants";
import styles from "../style";

const Carrousel = () => {
  return (
    <div className="  xs:min-h-[0]  min-h-[10vh] " >
      <div className="md:w-[200%] w-[300%] flex items-center space-x-5 justify-around absolute   animate">
        {top.map((user) => (
          <div
            key={user.id}
            className=" md:ring  md:flex  md:flex-row flex flex-col justify-center items-center p-1  ring-blue-300  overflow-hidden md:rounded-full hover:ring-blue-500"
          >
            <img src={user.img} alt="" className="rounded-full w-14 pr-2" />
            <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px]">{user.name}</p>
          </div>
        ))}
        {top.map((user) => (
          <div
            key={user.id}
            className=" md:ring  md:flex  md:flex-row flex flex-col justify-center items-center p-1  ring-blue-300  overflow-hidden md:rounded-full hover:ring-blue-500"
          >
            <img src={user.img} alt="" className="rounded-full w-14 pr-2" />
            <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px]">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;

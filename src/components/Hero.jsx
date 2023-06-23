import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import { pix } from "../assets";
import Stats from "./Stats";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} justify-between `}>
    <div
      className={` ${styles.flexStart}  flex-col xl:px-0 sm:px-16 px-6`}
    >
      <h1 className=" font-poppins font-semibold sm:text-[72px] text-[52px] text-white ss:leading-[80px] ">
        Discover the <br className="ss:block hidden" /> {"  "}
        <span className="text-gradient">World of Digital</span>{" "}
        <br className="sm:block hidden" /> {"  "}
        Collectibles
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio ea quibusdam, ut ratione, nulla id cumque magni repellat, laborum illo rerum? Adipisci soluta exercitationem quas nihil, delectus voluptas fuga.
      </p>
      <GetStarted />
    
    </div>
    <div className={` flex ${styles.flexCenter}   md:my-0 my-7 mr-[2rem]  relative`}>
        <img src={pix} alt="art" className=" md:w-[100%] w-[400px] h-[99%]   relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full top-0 bottom-40 white__gradient"/>
          <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient"/>
      </div>
  </section>
);

export default Hero;

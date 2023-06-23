import React from 'react';
import { nftone,diamond } from "../assets";

const Nftcard = ({img,owner,ETH,title}) => {
  return (
    <div className="flex flex-1  shadow-x rounded-lg   items-center justify-center  hover:-translate-y-6 ">
    <div className="my-10  rounded-lg  relative  cutcorner   ">
       <img src={img} className="cutimage rounded-lg " alt="nftpost" /> 
         <div className='pl-3 absolute rounded-lg bottom-[0]  rounded-t-lg bg-white bg-opacity-10 glass w-full backdrop-filter backdrop-blur-lg   '>
          <h2 className="text-md font-bold mt-3 text-white ">{title}</h2>
          <p className="text-white font-poppins text-sm my-2">Owner : <span>{owner}</span></p>
          <div className="flex  items-center text-sm pb-3">
          <img src={ diamond  } className='w-6 h-6 ' alt="diamond" />
            <p className="text-purple-100 font-bold ">
              {ETH} ETH
            </p>
           
           
          </div>
          </div> 
       
      </div>
     
    </div>
  );
};

export default Nftcard;

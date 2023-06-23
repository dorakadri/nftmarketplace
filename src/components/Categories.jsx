import React from 'react'
import styles from '../style'
import Nftcard from './Nftcard'
import { drops } from '../constants'
import {CgArrowLongRight} from "react-icons/cg"
const LastDrops = () => {
  return (
    <section id='LastDrops' className={`${styles.paddingY}    flex flex-col  relative `}>
        <div className='flex items-center justify-between '>
        <h1 className="font-poppins font-semibold md:text-[48px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px]">Last Drops 🔥</h1>
        <div className='flex items-center gap-2 justify-center cursor-pointer  '>     
        
         <p className={`font-poppins font-thin text-dimWhite text-[16px]     `} >view more </p>
       <CgArrowLongRight className='text-white ' /></div>
   
        </div>
      
        <div className='flex flex-wrap gap-5 px-9    justify-center w-full  relative z-[5]'>
     {drops.map((card,index)=>(
       <Nftcard  key={card.id} {...card}/>
     ))}
     
     
     
      
      </div>

          
    </section>
  )
}

export default LastDrops
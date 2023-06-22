import React from 'react'
import styles from '../style'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[170px] h-[64px] rounded-xl bg-purple-gradient p-[2px] mt-8 cursor-pointer`}>
      <div className={`${styles.flexCenter} bg-primary hover:bg-transparent w-[100%] h-[100%] rounded-xl `} >
     <p className='font-poppins font-medium text-[18px] leading-[23px] text-white'>Get Started</p>
      </div>
      </div>
  )
}

export default GetStarted
import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () =>  (
    <section className={`flex  flex-1 divide-x flex-row flex-wrap sm:mb-20  mb-6 `}>
        
    {stats.map((stat)=>(
      <div key={stat.id} className={`flex-1 flex   items-center flex-col m-3`}>
        <h4 className='font-poppins font-semibold md:text-[30px] text-[16px]   xs:leading-[53px] leading-[43px] text-white '>{stat.value}</h4>
        <p className='font-poppins font-bold md:text-[16px] text-[10px]  xs:leading-[26px] leading-[21px]      text-gradient uppercase ml-3 '>{stat.title}</p>
      </div>
    ))}
 
   </section>
  )


export default Stats
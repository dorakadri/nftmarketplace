import React from 'react'
import styles from '../style'
import { Featuresapp } from '../constants'
import Card from './Card'
const Features = () =>  (
  <section id='features' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div>
        <h1 className={styles.heading2}>Create and Sell your NFTS </h1>
      </div>

      <div className='flex flex-wrap  overflow-ellipsis justify-center w-full  relative z-[1]'>
    {Featuresapp.map((card)=>(
      
        <Card key={card.id} {...card}   />
       
      
    ))}
     <div className='absolute z-[3] -left-1/2 top-0 w-[20%] h-[50%] rounded-full white__gradient'/>
  <div className='absolute z-[0] -left-4 bottom-0 w-[20%] h-[50%] rounded-full pink__gradient'/>
  </div>
      </section>
  )


export default Features
import React from 'react'
import styles from '../style'
import { Featuresapp } from '../constants'
import Card from './Card'
const Features = () =>  (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div>
        <h1 className={styles.heading2}>Create and Sell your NFTS </h1>
      </div>

      <div className='flex flex-wrap  justify-center w-full  relative z-[1]'>
    {Featuresapp.map((card)=>(
        <Card key={card.id} {...card}/>
    ))}
  </div>
      </section>
  )


export default Features
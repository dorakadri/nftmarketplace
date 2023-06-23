import React from 'react'
import styles from '../style'
import { people01 } from '../assets'
import { top } from '../constants'
import Carrousel from './Carrousel'

const Top = () => {
  return (
    <section id='top' className={`xs:pb-[100px] pb-6 ${styles.boxWidth} overflow-hidden relative flex-col  `}>
      <div  className={`sm:py-16 py-6  `}>
        <h1 className={styles.heading2}>Top creators ⚡</h1>
        
      </div>
   
<Carrousel/>
    </section>
  )
}

export default Top
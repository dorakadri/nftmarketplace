import React from 'react'
import Navbar from './components/navbar'
import styles from './style'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Clients from './components/Clients'
import Features from './components/Features'
import Top from './components/Top'
import Categories from './components/Categories'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LastDrops from './components/Categories'

const App = () =>  (
  <div className='bg-primary w-full overflow-hidden'>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
       <Navbar/> 
       </div>
      </div>  

      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats/>
      <Clients/>
      <Features/>
      <LastDrops/>
      <Top/>
      <CTA/>
     
      
      
       

      <Footer/>

      </div>
      </div>
    </div>
  )


export default App
import React from 'react'
import styles from './styles'

import {
    Navbar 
    ,Hero
    ,About
  ,Events
  ,Highlights
  ,Sponsors
  ,History
  ,Footer } from './components'

const HomePage = () => {
  return (
    
  <div className="bg-primary w-full overflow-hidden">
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

  <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <About/>
      <Events/>
      <Highlights/>
      <Sponsors/>
      <History/>
      <Footer/> 
    </div>
  </div>

</div>
  )
}

export default HomePage
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
        <section className={`flex flex-col justify-center items-center h-[700px]`}>
            <h1 className={`font-poppins sm:text-[60px] text-[32px] text-gradient z-[1]`}>TechFest  2022</h1>
                    <Button styles="mt-10"/>   
        <div className='absolute z-[0] w-[40%] h-[35%] top-0
        pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] top-0
        rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%]
        right-20 bottom-20 blue__gradient'/>          
        </section>
    </div>
  )
}

export default Hero
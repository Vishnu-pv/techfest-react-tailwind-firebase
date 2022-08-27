import React from 'react'
import Button from './Button'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Hero = () => {
  return (
    <div>
        <section className={`flex flex-col justify-center items-center h-[680px] `}>
            <h1 className={`font-poppins sm:text-[60px] text-[32px] text-gradient `}>TechFest  2022</h1>
                    <Button styles="mt-10"/>             
        </section>
    </div>
  )
}

export default Hero
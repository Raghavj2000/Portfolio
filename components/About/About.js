import React from 'react'
import { RiBracketsLine } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { LuAppWindow } from "react-icons/lu";

const About = () => {
  return (
    <section  id="about" className='w-full py-40  flex items-center justify-center   '>
        <div className='flex flex-col items-start justify-center gap-16'>
      <h1 className='text-5xl font-medium text-left'>What I do?</h1>
      <div className='flex items-center justify-start gap-16 w-[65vw] flex-wrap '>
        <div className='flex flex-col items-start justify-center  py-1 '>
            <RiBracketsLine className='size-8 mb-2 '/>
            <h2 className='text-xl font-medium'>Front-end Development</h2>
            <p className='text-lg w-72 text-pretty text-gray-500'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        </div>
        <div className='flex flex-col items-start justify-center  py-1 '>
            <IoGameController className='size-8 mb-2 '/>
            <h2 className='text-xl font-medium'>Gaming</h2>
            <p className='text-lg w-72 text-pretty  text-gray-500'>{"In my free time, I'm passionate about gaming. Exploring virtual worlds is my favorite pastimes."}</p>
        </div>
        <div className='flex flex-col items-start justify-center  py-1 '>
            <LuAppWindow className='size-8 mb-2 '/>
            <h2 className='text-xl font-medium'>Website Designing</h2>
            <p className='text-lg w-72 text-pretty  text-gray-500'>Crafting visually appealing and user-friendly websites is a part of my skill set. </p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About

import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className='w-full py-40  flex items-center justify-center '>
        <div className='flex flex-col items-start justify-center gap-16'>
      <h1 className='text-5xl font-medium text-left'>Skills</h1>
        <div className='flex items-start justify-start gap-20 flex-wrap w-[65dvw] '>
            <div className='flex flex-row items-center gap-5  justify-center '>
                <FaHtml5 className='size-16'/>
                <h2 className='text-xl font-medium'>HTML5</h2>
               
            </div>
            <div className='flex flex-row items-center gap-5 justify-center   '>
                <FaCss3Alt className='size-16'/>
                <h2 className='text-xl font-medium'>CSS</h2>
               
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <IoLogoJavascript className='size-16'/>
                <h2 className='text-xl font-medium'>Javascript</h2>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <FaReact className='size-16'/>
                <h2 className='text-xl font-medium'>Reactjs</h2>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <TbBrandNextjs className='size-16'/>
                <h2 className='text-xl font-medium'>NextJs</h2>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <TbBrandNodejs className='size-16'/>
                <h2 className='text-xl font-medium'>NodeJs</h2>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <SiTailwindcss className='size-16'/>
                <h2 className='text-xl font-medium'>TailwindCss</h2>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <SiTypescript className='size-16'/>
                <h2 className='text-xl font-medium'>Typescript</h2>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <FaJava className='size-16'/>
                <h2 className='text-xl font-medium'>Java</h2>
            </div>
            <div className='flex flex-row items-center gap-5 justify-center  '>
                <SiMongodb className='size-16'/>
                <h2 className='text-xl font-medium'>MongoDb</h2>
            </div>
            </div>
      </div>
    </section>
  )
}

export default Skills

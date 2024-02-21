import React from 'react'
import coding from '@/public/assets/coding.jpg'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='w-full py-40 flex items-center justify-center gap- relative'>
        <div className='flex  items-center justify-between w-[65vw] flex-warp sm:flex-col lg:flex-row '>
      <div className='flex items-start justify-center flex-col gap-7'>
            <h1 className='text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-light'>I'm <span className='font-medium'>Raghavendra J</span></h1>
            <h2 className='text-2xl'>Designer, Coder, Front-end Developer, Gamer and Student.</h2>
      </div>
      <div>
        <Image src={coding} width={300} height={300} alt='a man coding' priority loading='eager'/>
      </div>
     
      </div>
      

      <h2 className='absolute bottom-5 right-20'>raghavjayateerth@gmail.com</h2>
      <div className='absolute left-5  flex flex-col items-center justify-center gap-9 '>
      <FaLinkedin className='size-6 cursor-pointer' />
      <FaGithub className='size-6 cursor-pointer' />
      <FaInstagram  className='size-6 cursor-pointer'/>
      <FaFacebook  className='size-6 cursor-pointer'/>
      <FaTwitter className='size-6 cursor-pointer' />
      </div>
      
    </section>
  )
}

export default Hero

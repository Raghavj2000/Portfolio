import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className='w-full py-40  flex items-center justify-center '>
        <div className='flex flex-col items-start justify-center gap-10'>
      <h1 className='text-5xl font-medium text-left'>Experience</h1>
      <div className='w-[65vw]  border-b-2 border-[#b4b4b4] flex flex-col pb-10 items-start justify-center'>
        <h2 className='text-3xl font-medium mb-1'>ZiniosEdge Software Technologies Pvt Ltd.</h2>
        <h3 className='text-xl font-medium mb-2'>Associate Software Enginner</h3>
        <p className='text-lg w-full text-pretty text-gray-500'>I am working as a SDE at Ziniosedge for a year. I have developed many projects and worked on many technologies.</p>
      </div>
      <div className='w-[65vw]   flex flex-col  items-start justify-center'>
        <h2 className='text-3xl font-medium mb-1'>Oslash.</h2>
        <h3 className='text-xl font-medium mb-2'>Front End Developer Intern</h3>
        <p className='text-lg w-full text-pretty text-gray-500'>As a front-end developer intern at Oslash, I meticulously crafted pixel-perfect UIs from Figma designs and successfully implemented a fully functional clone of their workspace, showcasing my proficiency in turning design concepts into seamless user interfaces.</p>
      </div>
      </div>
      </section>
  )
}

export default Experience

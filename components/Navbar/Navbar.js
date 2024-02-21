import React from 'react'
import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='w-full flex justify-between px-8 py-6'>
        <h1 className='text-5xl'>RJ</h1>
        <nav>
            <ul className='flex text-lg space-x-4'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/#about'>About</Link></li>
                <li><Link href='/#skills'>Skills</Link></li>
                <li><Link href='/#experience'>Experience</Link></li>
                <li><Link href='/#contact'>Contact</Link></li>
            </ul>
        </nav>

    </header>
  )
}

export default Navbar

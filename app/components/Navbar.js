import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        
            <nav className='flex justify-between px-5 py-5 bg-purple-400 text-white' >
                <Link href="/"><div className='font-bold text-xl'>Blinkit</div></Link>
                <ul className='flex gap-5 '>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/shorten"><li>Try now</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        
    )
}

export default Navbar

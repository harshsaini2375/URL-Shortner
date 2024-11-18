import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        
            <nav className='flex justify-between px-5 py-5 bg-purple-400 text-white' >
                <div className="logo flex gap-2  items-center">
                    <Image src={"/bitly.svg"} alt='logo' height={35} width={35}/>
                <Link href="/"><div className='font-bold text-2xl'>Blinkit</div></Link>
                </div>
                <ul className='flex gap-3 justify-center items-center md:gap-5 text-base md:text-xl'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/shorten"><li>Try now</li></Link>
                    <Link href="/about"><li>About</li></Link>
                </ul>
            </nav>
        
    )
}

export default Navbar

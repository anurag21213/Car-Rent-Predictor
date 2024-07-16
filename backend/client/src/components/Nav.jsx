import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <header className=' m-auto w-full md:max-w-[70%] p-5 flex items-center justify-between font-semibold '>
            <nav className='w-full flex items-center justify-between '>
                <motion.h2
                 initial={{opacity:0,x:-100}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1}}
                className='text-2xl'><span className='text-4xl text-green-700 drop-shadow-md font-extrabold'>Car Rent</span> Predictor</motion.h2>
                <motion.ul
                initial={{opacity:0,x:300}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1}}
                className=' hidden  md:flex md:items-center md:justify-between md:text-lg md:w-[40%]'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/tryout'>Tryout</Link></li>
                </motion.ul>
            </nav>

        </header>
    )
}

export default Nav

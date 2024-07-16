import React from 'react'
import { motion } from 'framer-motion'
import car from '../assets/car_img.png'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/tryout')
    }
  return (
    <div className='flex items-center justify-evenly  overflow-hidden'>
      <div className='flex-col items-center justify-center  p-10 w-[40%]'>
        <motion.h1 
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1}}
        className='text-3xl font-medium mx-auto'>Predict The Rent Of Car </motion.h1>
        <motion.p 
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1}}
        className='text-sm text-cyan-100 my-5'>
         Our Car Rent Prediction website leverages advanced machine learning algorithms to provide accurate and reliable predictions for car rental prices.
        </motion.p>
        <button className='h-[35px] w-[75px] font-medium  border-b-2 border-cyan-100 ' onClick={handleNavigate}>Tryout</button>
      </div>
      <motion.img
      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1}}
      className='h-[600px] w-[600px]' src={car}/>
    </div>
  )
}

export default Hero

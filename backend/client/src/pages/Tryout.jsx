import React from 'react'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'
import Form from '../components/Form'

const Tryout = () => {
  return (
    <div>
      <Nav/>
      <motion.div
      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1}}
      
      className='max-w-[70%] mx-auto p-3 '

      >
        <h2 className='mx-auto'>Enter Features based on which you want to predict the rent of a car</h2>
        <Form/>
      </motion.div>
    </div>
  )
}

export default Tryout

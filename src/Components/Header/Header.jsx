import React from 'react'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  return (
    <motion.div 
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>
        <i className="fas fa-heart"></i> For My Dearest Akhila <i className="fas fa-heart"></i>
      </h1>
      <p>
        On this special day, I want to express what you mean to me and ask you the most important question of my life...
      </p>
    </motion.div>
  )
}

export default Header
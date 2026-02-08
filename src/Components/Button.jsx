import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  const buttonClass = `btn ${variant === 'primary' ? 'yes-btn' : 'no-btn'} ${className}`;
  
  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
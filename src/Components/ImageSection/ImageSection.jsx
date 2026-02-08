import React from 'react'
import { motion } from 'framer-motion'
import './ImageSection.css'

const ImageSection = ({ currentImage, imagePaths, onImageChange }) => {
  return (
    <motion.div 
      className="image-section"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <div className="image-frame">
        <motion.img
          id="valentineImage"
          src={currentImage}
          alt="Valentine's Image"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="image-caption">
        Every moment with you is a beautiful memory I cherish forever.
      </div>
      
      <div className="image-selector">
        {imagePaths.map((_, index) => (
          <button
            key={index}
            className={`image-dot ${currentImage === imagePaths[index] ? 'active' : ''}`}
            onClick={() => onImageChange(index)}
            aria-label={`Select image ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ImageSection
import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'

const Card = ({
  noClickCount,
  message,
  showMessage,
  onYesClick,
  onNoClick,
  onNoButtonHover,
  onNoButtonTouch,
  buttonPosition,
  noButtonRef,
  noButtonText,
  isYesClicked,
  isMobile
}) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="card-title">My Beloved Akhila ❤️</h2>
      
      <p className="card-text">
        From the moment we met, you've filled my life with joy, laughter, and meaning. Every day with you is a blessing, and my heart beats only for you.
      </p>
      
      <p className="card-text">
        Today, on Valentine's Day, I want to make a promise to cherish you forever, to stand by your side through all of life's adventures, and to love you more with each passing day.
      </p>
      
      <div className="card-question">
        Will you make me the happiest person and be my Valentine forever?
      </div>
      
      {isMobile && (
        <div className="mobile-warning">
          <i className="fas fa-mobile-alt"></i> On mobile, tap carefully! The "No" button might try to escape!
        </div>
      )}
      
      <div className="buttons">
        <motion.button
          className="btn yes-btn"
          id="yesBtn"
          onClick={onYesClick}
          disabled={isYesClicked}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: isYesClicked ? 'none' : 'block' }}
        >
          <i className="fas fa-heart"></i> YES! Forever and Always <i className="fas fa-heart"></i>
        </motion.button>
        
        <motion.button
          ref={noButtonRef}
          className="btn no-btn"
          id="noBtn"
          onClick={onNoClick}
          onMouseMove={onNoButtonHover}
          onTouchStart={onNoButtonTouch}
          onTouchMove={onNoButtonTouch}
          style={{
            position: 'fixed',
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            display: isYesClicked || noClickCount >= 5 ? 'none' : 'block'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {noButtonText}
        </motion.button>
      </div>
      
      <div className="message-container">
        {showMessage && (
          <motion.div
            className="message"
            id="message"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.div>
        )}
      </div>
      
      <div className="counter">
        <span id="attemptCount">{noClickCount}</span> attempts to click "No" - I appreciate your persistence!
      </div>
    </motion.div>
  )
}

export default Card
// import React, { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Header from './components/Header/Header'
// import Card from './components/Card/Card'
// import ImageSection from './components/ImageSection/ImageSection'
// import HeartsBackground from './components/HeartsBackground/HeartsBackground'
// import EmailNotification from './components/EmailNotification/EmailNotification'
// import useIsMobile from './hooks/useIsMobile'
// import './App.css'
// import '../public/assert'

// function App() {
//   const [noClickCount, setNoClickCount] = useState(0)
//   const [message, setMessage] = useState('')
//   const [showMessage, setShowMessage] = useState(false)
//   const [showEmailNotification, setShowEmailNotification] = useState(false)
//   const [currentImage, setCurrentImage] = useState(0)
//   const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
//   const [isYesClicked, setIsYesClicked] = useState(false)
//   const [hearts, setHearts] = useState([])
//   const noButtonRef = useRef(null)
  
//   const isMobile = useIsMobile()
  
//   // Image paths - replace with your images
//   const imagePaths = [
//     'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
//     'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
//     'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
//     'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1727&q=80',
//   './assert/a1.webp'
//   ]
  
//   const messages = [
//     "You've made me the happiest person alive! 💖 I promise to love you forever.",
//     "My heart is overflowing with joy! 🥰 This is just the beginning of our forever.",
//     "I can't wait to spend every Valentine's Day with you for the rest of our lives! 💍",
//     "You are my dream come true! ❤️ I'll cherish you always and forever.",
//     "This is the best decision of my life! 💘 I love you more than words can express."
//   ]
  
//   const noButtonTexts = [
//     "Maybe Later...",
//     "Are you sure?",
//     "Think again!",
//     "Give it another thought!",
//     "Last chance to reconsider!",
//     "Okay, I give up! You win!"
//   ]

//   // Initialize random button position
//   useEffect(() => {
//     const maxX = window.innerWidth - 200
//     const maxY = window.innerHeight - 100
//     setButtonPosition({
//       x: Math.max(50, Math.random() * maxX),
//       y: Math.max(50, Math.random() * maxY)
//     })

//     // Change image every 10 seconds
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % imagePaths.length)
//     }, 10000)

//     return () => clearInterval(interval)
//   }, [imagePaths.length])

//   const handleYesClick = async () => {
//     const randomMessage = messages[Math.floor(Math.random() * messages.length)]
//     setMessage(randomMessage)
//     setShowMessage(true)
//     setIsYesClicked(true)

//     // Create celebration hearts
//     createHearts(50)

//     // Show email notification
//     setShowEmailNotification(true)

//     // Play celebration sound
//     playCelebrationSound()
//   }

//   const handleNoClick = () => {
//     if (noClickCount >= 5) return

//     setNoClickCount(prev => {
//       const newCount = prev + 1

//       if (newCount >= 5) {
//         setMessage("I knew you couldn't resist! ❤️ You're stuck with me forever!")
//         setShowMessage(true)
//         createHearts(30)
//         return newCount
//       }

//       // Move button to random position
//       const maxX = window.innerWidth - (noButtonRef.current?.offsetWidth || 200) - 50
//       const maxY = window.innerHeight - (noButtonRef.current?.offsetHeight || 100) - 50
//       setButtonPosition({
//         x: Math.max(50, Math.random() * maxX),
//         y: Math.max(50, Math.random() * maxY)
//       })

//       // Change image
//       setCurrentImage((prev) => (prev + 1) % imagePaths.length)

//       // Create some hearts
//       createHearts(5)

//       return newCount
//     })
//   }

//   const handleNoButtonHover = (e) => {
//     if (noClickCount >= 5 || isYesClicked || isMobile) return

//     const buttonRect = noButtonRef.current?.getBoundingClientRect()
//     if (!buttonRect) return

//     const centerX = buttonRect.left + buttonRect.width / 2
//     const centerY = buttonRect.top + buttonRect.height / 2
//     const distanceX = e.clientX - centerX
//     const distanceY = e.clientY - centerY
//     const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

//     if (distance < 100) {
//       const maxX = window.innerWidth - buttonRect.width - 50
//       const maxY = window.innerHeight - buttonRect.height - 50
//       setButtonPosition({
//         x: Math.max(50, Math.random() * maxX),
//         y: Math.max(50, Math.random() * maxY)
//       })
//     }
//   }

//   const handleNoButtonTouch = () => {
//     if (noClickCount >= 5 || isYesClicked || !isMobile) return

//     // Move button on mobile touch
//     const maxX = window.innerWidth - (noButtonRef.current?.offsetWidth || 200) - 50
//     const maxY = window.innerHeight - (noButtonRef.current?.offsetHeight || 100) - 50
//     setButtonPosition({
//       x: Math.max(50, Math.random() * maxX),
//       y: Math.max(50, Math.random() * maxY)
//     })
//   }

//   const createHearts = (count) => {
//     const newHearts = []
//     for (let i = 0; i < count; i++) {
//       newHearts.push({
//         id: Date.now() + i,
//         left: Math.random() * 100,
//         delay: Math.random() * 5,
//         size: Math.random() * 20 + 15
//       })
//     }
//     setHearts(prev => [...prev, ...newHearts])

//     // Remove hearts after animation
//     setTimeout(() => {
//       setHearts(prev => prev.slice(count))
//     }, 8000)
//   }

//   const playCelebrationSound = () => {
//     try {
//       const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-happy-crowd-laugh-464.mp3')
//       audio.volume = 0.3
//       audio.play().catch(e => console.log("Audio play failed:", e))
//     } catch (e) {
//       console.log("Audio not supported")
//     }
//   }

//   return (
//     <div className="app">
//       <HeartsBackground hearts={hearts} />

//       <div className="container">
//         <Header />

//         <div className="content">
//           <Card
//             noClickCount={noClickCount}
//             message={message}
//             showMessage={showMessage}
//             onYesClick={handleYesClick}
//             onNoClick={handleNoClick}
//             onNoButtonHover={handleNoButtonHover}
//             onNoButtonTouch={handleNoButtonTouch}
//             buttonPosition={buttonPosition}
//             noButtonRef={noButtonRef}
//             noButtonText={noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
//             isYesClicked={isYesClicked}
//             isMobile={isMobile}
//           />

//           <ImageSection
//             currentImage={imagePaths[currentImage]}
//             imagePaths={imagePaths}
//             onImageChange={(index) => setCurrentImage(index)}
//           />
//         </div>

//         <AnimatePresence>
//           {showEmailNotification && (
//             <EmailNotification />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }

// export default App



import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [noClickCount, setNoClickCount] = useState(0)
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [showEmailNotification, setShowEmailNotification] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const [isYesClicked, setIsYesClicked] = useState(false)
  const [hearts, setHearts] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const noButtonRef = useRef(null)
  
  // Image paths - using your local images
  const imagePaths = [
    '/assert/w8.jpg',
    '/assert/w2.jpg',
    '/assert/sc.jpg.jpeg',
    '/assert/w3.webp',
    'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80'
  ]
  
  const messages = [
    "You've made me the happiest person alive! 💖 I promise to love you forever.",
    "My heart is overflowing with joy! 🥰 This is just the beginning of our forever.",
    "I can't wait to spend every Valentine's Day with you for the rest of our lives! 💍",
    "You are my dream come true! ❤️ I'll cherish you always and forever.",
    "This is the best decision of my life! 💘 I love you more than words can express."
  ]
  
  const noButtonTexts = [
    "Maybe Later...",
    "Are you sure?",
    "Think again!",
    "Give it another thought!",
    "Last chance to reconsider!",
    "Okay, I give up! You win!"
  ]

  // Initialize
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Set initial button position
    const maxX = window.innerWidth - 200
    const maxY = window.innerHeight - 100
    setButtonPosition({
      x: Math.max(50, Math.random() * maxX),
      y: Math.max(50, Math.random() * maxY)
    })

    // Change image every 10 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagePaths.length)
    }, 10000)

    return () => {
      window.removeEventListener('resize', checkMobile)
      clearInterval(interval)
    }
  }, [imagePaths.length])

  const handleYesClick = async () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    setMessage(randomMessage)
    setShowMessage(true)
    setIsYesClicked(true)

    // Create celebration hearts
    createHearts(50)

    // Show email notification
    setShowEmailNotification(true)

    // Play celebration sound
    playCelebrationSound()
  }

  const handleNoClick = () => {
    if (noClickCount >= 5) return

    setNoClickCount(prev => {
      const newCount = prev + 1

      if (newCount >= 5) {
        setMessage("I knew you couldn't resist! ❤️ You're stuck with me forever!")
        setShowMessage(true)
        createHearts(30)
        return newCount
      }

      const maxX = window.innerWidth - (noButtonRef.current?.offsetWidth || 200) - 50
      const maxY = window.innerHeight - (noButtonRef.current?.offsetHeight || 100) - 50
      setButtonPosition({
        x: Math.max(50, Math.random() * maxX),
        y: Math.max(50, Math.random() * maxY)
      })

      setCurrentImage((prev) => (prev + 1) % imagePaths.length)
      createHearts(5)

      return newCount
    })
  }

  const createHearts = (count) => {
    const newHearts = []
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 20 + 15
      })
    }
    setHearts(prev => [...prev, ...newHearts])

    setTimeout(() => {
      setHearts(prev => prev.slice(count))
    }, 8000)
  }

  const playCelebrationSound = () => {
    try {
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-happy-crowd-laugh-464.mp3')
      audio.volume = 0.3
      audio.play().catch(e => console.log("Audio play failed:", e))
    } catch (e) {
      console.log("Audio not supported")
    }
  }

  return (
    <div className="app">
      {/* Hearts Background */}
      <div className="hearts-container">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              fontSize: `${heart.size}px`,
              color: `rgba(233, 30, 99, ${0.5 + Math.random() * 0.3})`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="container">
        {/* Header */}
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

        <div className="content">
          {/* Card */}
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
                onClick={handleYesClick}
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
                onClick={handleNoClick}
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
                {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
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

          {/* Image Section */}
          <motion.div 
            className="image-section"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="image-frame">
              <motion.img
                id="valentineImage"
                src={imagePaths[currentImage]}
                alt="Akhila's Photo"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
                }}
              />
            </div>
            
            <div className="image-caption">
              Every moment with you is a beautiful memory I cherish forever.
            </div>
            
            <div className="image-selector">
              {imagePaths.map((_, index) => (
                <button
                  key={index}
                  className={`image-dot ${currentImage === index ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Select image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Email Notification */}
        <AnimatePresence>
          {showEmailNotification && (
            <motion.div
              className="email-notification"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                const subject = encodeURIComponent("🎉 Akhila Accepted Your Proposal!")
                const body = encodeURIComponent(
                  `Akhila just said YES to your Valentine proposal!\n\n` +
                  `Time: ${new Date().toLocaleString()}\n\n` +
                  `Celebration time! 🎉`
                )
                window.open(`mailto:kurrashiva333@gmail.com?subject=${subject}&body=${body}`, '_blank')
              }}
            >
              <i className="fas fa-check-circle"></i> 
              <span>Click here to send celebration email to Shiva! 🥳</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
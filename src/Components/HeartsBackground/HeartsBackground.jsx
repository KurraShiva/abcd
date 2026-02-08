import React from 'react'
import './HeartsBackground.css'

const Heart = ({ heart }) => {
  return (
    <div
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
  )
}

const HeartsBackground = ({ hearts }) => {
  return (
    <div className="hearts-container">
      {hearts.map(heart => (
        <Heart key={heart.id} heart={heart} />
      ))}
    </div>
  )
}

export default HeartsBackground
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './EmailNotification.css'

const EmailNotification = () => {
  useEffect(() => {
    sendEmailToShiva()
  }, [])

  const sendEmailToShiva = async () => {
    try {
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your-public-key')
      
      const templateParams = {
        to_email: 'kurrashiva333@gmail.com',
        to_name: 'Shiva',
        from_name: 'Akhila',
        message: '🎉 Akhila just accepted your Valentine proposal! She said YES! ❤️',
        date: new Date().toLocaleString(),
        ip_address: await getIPAddress()
      }
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your-service-id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your-template-id',
        templateParams
      )
      
      console.log('🎉 Email sent successfully to Shiva!')
    } catch (error) {
      console.error('Failed to send email:', error)
      // Fallback mailto link
      createMailtoFallback()
    }
  }

  const getIPAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      return data.ip
    } catch {
      return 'Unknown'
    }
  }

  const createMailtoFallback = () => {
    const subject = encodeURIComponent("🎉 BEST NEWS EVER! Akhila Said YES! 🎉")
    const body = encodeURIComponent(
      `Akhila just accepted your Valentine's proposal!\n\n` +
      `Time: ${new Date().toLocaleString()}\n\n` +
      `This is the happiest moment! She chose FOREVER with you! ❤️\n\n` +
      `Sent from your Valentine Proposal Website`
    )
    
    const mailtoLink = `mailto:kurrashiva333@gmail.com?subject=${subject}&body=${body}`
    
    // Open in new tab
    window.open(mailtoLink, '_blank')
  }

  return (
    <motion.div
      className="email-notification"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <i className="fas fa-check-circle"></i> 
      <span>Celebration email has been sent to Shiva! He'll be over the moon! 🥳</span>
    </motion.div>
  )
}

export default EmailNotification
// import React, { useEffect } from 'react'
// import { motion } from 'framer-motion'
// import emailjs from '@emailjs/browser'
// import './EmailNotification.css'

// const EmailNotification = () => {
//   useEffect(() => {
//     sendEmailToShiva()
//   }, [])

//   const sendEmailToShiva = async () => {
//     try {
//       // Initialize EmailJS with your public key
//       emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your-public-key')
      
//       const templateParams = {
//         to_email: 'kurrashiva333@gmail.com',
//         to_name: 'Shiva',
//         from_name: 'Akhila',
//         message: '🎉 Akhila just accepted your Valentine proposal! She said YES! ❤️',
//         date: new Date().toLocaleString(),
//         ip_address: await getIPAddress()
//       }
      
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your-service-id',
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your-template-id',
//         templateParams
//       )
      
//       console.log('🎉 Email sent successfully to Shiva!')
//     } catch (error) {
//       console.error('Failed to send email:', error)
//       // Fallback mailto link
//       createMailtoFallback()
//     }
//   }

//   const getIPAddress = async () => {
//     try {
//       const response = await fetch('https://api.ipify.org?format=json')
//       const data = await response.json()
//       return data.ip
//     } catch {
//       return 'Unknown'
//     }
//   }

//   const createMailtoFallback = () => {
//     const subject = encodeURIComponent("🎉 BEST NEWS EVER! Akhila Said YES! 🎉")
//     const body = encodeURIComponent(
//       `Akhila just accepted your Valentine's proposal!\n\n` +
//       `Time: ${new Date().toLocaleString()}\n\n` +
//       `This is the happiest moment! She chose FOREVER with you! ❤️\n\n` +
//       `Sent from your Valentine Proposal Website`
//     )
    
//     const mailtoLink = `mailto:kurrashiva333@gmail.com?subject=${subject}&body=${body}`
    
//     // Open in new tab
//     window.open(mailtoLink, '_blank')
//   }

//   return (
//     <motion.div
//       className="email-notification"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//     >
//       <i className="fas fa-check-circle"></i> 
//       <span>Celebration email has been sent to Shiva! He'll be over the moon! 🥳</span>
//     </motion.div>
//   )
// }

// export default EmailNotification


// import React, { useEffect } from 'react'
// import { motion } from 'framer-motion'
// import emailjs from '@emailjs/browser'
// import './EmailNotification.css'

// const EmailNotification = () => {
//   useEffect(() => {
//     sendEmailToShiva()
//   }, [])

//   const sendEmailToShiva = async () => {
//     try {
//       // Initialize EmailJS with your public key
//       emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your-public-key')
      
//       const templateParams = {
//         to_email: 'kurrashiva333@gmail.com',
//         to_name: 'Shiva',
//         from_name: 'Akhila',
//         message: '🎉 Akhila just accepted your Valentine proposal! She said YES! ❤️',
//         date: new Date().toLocaleString(),
//         ip_address: await getIPAddress()
//       }
      
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your-service-id',
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your-template-id',
//         templateParams
//       )
      
//       console.log('🎉 Email sent successfully to Shiva!')
//     } catch (error) {
//       console.error('Failed to send email:', error)
//       // Fallback mailto link
//       createMailtoFallback()
//     }
//   }

//   const getIPAddress = async () => {
//     try {
//       const response = await fetch('https://api.ipify.org?format=json')
//       const data = await response.json()
//       return data.ip
//     } catch {
//       return 'Unknown'
//     }
//   }

//   const createMailtoFallback = () => {
//     const subject = encodeURIComponent("🎉 BEST NEWS EVER! Akhila Said YES! 🎉")
//     const body = encodeURIComponent(
//       `Akhila just accepted your Valentine's proposal!\n\n` +
//       `Time: ${new Date().toLocaleString()}\n\n` +
//       `This is the happiest moment! She chose FOREVER with you! ❤️\n\n` +
//       `Sent from your Valentine Proposal Website`
//     )
    
//     const mailtoLink = `mailto:kurrashiva333@gmail.com?subject=${subject}&body=${body}`
    
//     // Open in new tab
//     window.open(mailtoLink, '_blank')
//   }

//   return (
//     <motion.div
//       className="email-notification"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//     >
//       <i className="fas fa-check-circle"></i> 
//       <span>Celebration email has been sent to Shiva! He'll be over the moon! 🥳</span>
//     </motion.div>
//   )
// }

// export default EmailNotification

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './EmailNotification.css'

const EmailNotification = ({ message }) => {
  const [emailStatus, setEmailStatus] = useState('sending')
  const [error, setError] = useState(null)

  useEffect(() => {
    sendEmailToShiva()
  }, [])

  const sendEmailToShiva = async () => {
    console.log('📧 Starting EmailJS send process...')
    
    try {
      // Check if environment variables exist
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      console.log('🔑 Public Key exists:', !!publicKey)
      console.log('🔧 Service ID exists:', !!serviceId)
      console.log('📝 Template ID exists:', !!templateId)

      if (!publicKey || publicKey === 'your-public-key') {
        throw new Error('EmailJS Public Key not configured. Check .env file.')
      }

      // Initialize EmailJS
      emailjs.init(publicKey)

      const templateParams = {
        to_email: 'kurrashiva333@gmail.com',
        to_name: 'Shiva',
        from_name: 'Akhila',
        message: message || '🎉 I accepted your Valentine proposal! YES! Forever and always! ❤️',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        celebration: 'YES! Let\'s celebrate our love!'
      }

      console.log('📤 Sending email with:', templateParams)

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      )

      console.log('✅ Email sent successfully!', response)
      setEmailStatus('sent')

    } catch (error) {
      console.error('❌ EmailJS Error:', error)
      setError(error.text || error.message || 'Unknown error')
      setEmailStatus('failed')
      
      // Fallback to mailto after 1 second
      setTimeout(() => {
        sendMailtoFallback()
      }, 1000)
    }
  }

  const sendMailtoFallback = () => {
    const subject = encodeURIComponent("🎉 Akhila Said YES to Your Valentine Proposal!")
    const body = encodeURIComponent(
      `Dear Shiva,\n\n` +
      `Akhila just accepted your Valentine proposal!\n\n` +
      `📅 Date: ${new Date().toLocaleDateString()}\n` +
      `⏰ Time: ${new Date().toLocaleTimeString()}\n` +
      `💌 Her Message: "${message || 'YES! Forever and Always!'}"\n\n` +
      `This is the happiest moment! Time to celebrate! 🥳\n\n` +
      `With love,\n` +
      `Your Valentine Proposal Website\n` +
      `❤️ Made with love for Akhila ❤️`
    )
    
    const mailtoLink = `mailto:kurrashiva333@gmail.com?subject=${subject}&body=${body}`
    
    // Open in new tab
    window.open(mailtoLink, '_blank')
  }

  const retryEmail = () => {
    setEmailStatus('sending')
    setError(null)
    sendEmailToShiva()
  }

  return (
    <motion.div
      className="email-notification"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {emailStatus === 'sending' && (
        <div className="email-status sending">
          <i className="fas fa-spinner fa-spin"></i>
          <span>Sending celebration email to Shiva...</span>
        </div>
      )}
      
      {emailStatus === 'sent' && (
        <div className="email-status success">
          <i className="fas fa-check-circle"></i>
          <div>
            <strong>🎉 Email Sent Successfully!</strong>
            <p>Shiva has been notified! He's celebrating right now! 🥳</p>
          </div>
        </div>
      )}
      
      {emailStatus === 'failed' && (
        <div className="email-status failed">
          <i className="fas fa-exclamation-circle"></i>
          <div>
            <strong>Email not sent automatically</strong>
            <p>{error || 'Click below to send manually'}</p>
            <div className="email-actions">
              <button onClick={retryEmail} className="retry-btn">
                <i className="fas fa-redo"></i> Retry Automatic Email
              </button>
              <button onClick={sendMailtoFallback} className="mailto-btn">
                <i className="fas fa-envelope"></i> Open Email Client
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default EmailNotification

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'reddytarun223@gmail.com',
      href: 'mailto:reddytarun223@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (940) 285-0439',
      href: 'tel:+19402850439',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cleveland, OH, USA',
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rsaitarun/',
      color: 'hover:bg-blue-600',
    },
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data)
      
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-7xl font-black text-neutral-200/30 rotate-12 select-none">
          CONTACT
        </div>
        <div className="absolute bottom-20 right-10 text-6xl font-black text-neutral-200/30 -rotate-12 select-none">
          CONNECT
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-neutral-200/20 select-none">
          TALK
        </div>
      </div>
      
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Ready to discuss your data engineering needs? Let's connect and explore how we can work together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-neutral-700">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Availability</h3>
                             <div className="space-y-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-neutral-700 font-medium">Available for Full-time Roles</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-neutral-700 font-medium">Open to Freelance Projects</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                   <span className="text-neutral-700 font-medium">Open to Consulting & Contract Work</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                   <span className="text-neutral-700 font-medium">Open for Internship</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="form-input"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="form-input"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Build Something Amazing Together</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Whether you need data pipelines, analytics solutions, or want to discuss potential opportunities, 
              I'm here to help bring your data vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  navigator.clipboard.writeText('reddytarun223@gmail.com')
                  toast.success('Email copied to clipboard!')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </motion.button>
              <motion.button
                onClick={() => {
                  navigator.clipboard.writeText('+1 (940) 285-0439')
                  toast.success('Phone number copied to clipboard!')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

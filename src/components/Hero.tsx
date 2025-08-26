import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Github, Mail, Linkedin, ChevronDown, Sparkles, Code, Database, BarChart3, Download } from 'lucide-react'
import ThreeDBackground from './ThreeDBackground'

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/saitarunreddye',
      icon: Github,
    },
    {
      name: 'Email',
      url: 'mailto:reddytarun223@gmail.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rsaitarun/',
      icon: Linkedin,
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      {/* 3D Background */}
      <ThreeDBackground />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)`,
          backgroundSize: '100px 100px, 150px 150px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>
      
      <div className="container-max relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            {/* Subtle Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex space-x-6 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-soft"
              >
                <Database className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-soft"
              >
                <BarChart3 className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center shadow-soft"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                <span className="text-neutral-800">SAI</span>
                <br />
                <span className="gradient-text">TARUN</span>
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
                <span className="text-lg text-neutral-600 font-medium">DATA ENGINEER</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-500"></div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl text-neutral-700 leading-relaxed">
                Transforming raw data into <span className="text-primary-600 font-semibold">powerful insights</span> through
                <br />
                <span className="text-accent-600 font-semibold">SQL pipelines</span> and <span className="text-secondary-600 font-semibold">analytics solutions</span>
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-neutral-500">
                <span>• SQL Server & Snowflake</span>
                <span>• ETL/ELT Pipelines</span>
                <span>• BI & Analytics</span>
              </div>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="inline-flex items-center space-x-3 px-6 py-3 bg-accent-100 border border-accent-200 rounded-full"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-accent-500 rounded-full"
              />
              <span className="text-accent-800 font-medium">Open to Work</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  View Projects
                </motion.button>
              </Link>
              <motion.a
                href="/sai_tarun_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
              <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-primary-500 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/80 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:border-primary-300 transition-all duration-300 shadow-soft"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Subtle Border */}
              <div className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 p-1 rounded-3xl shadow-medium">
                <div className="relative">
                  <img
                    src="/images/profile-photo.jpg"
                    alt="Sai Tarun"
                    className="w-80 h-80 rounded-3xl object-cover shadow-soft"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback */}
                  <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-soft hidden">
                    <span className="text-6xl font-bold text-white">ST</span>
                  </div>
                </div>
              </div>

              {/* Subtle Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-2 w-4 h-4 bg-primary-400/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 w-3 h-3 bg-accent-400/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [-3, 8, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-4 w-2 h-2 bg-secondary-400/20 rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-soft cursor-pointer"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Subtle Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-3 h-3 bg-primary-400/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-4 h-4 bg-accent-400/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [-8, 12, -8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-3 h-3 bg-secondary-400/20 rounded-full blur-sm"
      />
    </section>
  )
}

export default Hero

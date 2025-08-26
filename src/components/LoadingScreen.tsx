import { motion } from 'framer-motion'
import { Code, Sparkles, Zap } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="text-center space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="loading-logo mx-auto"
        >
          <Code className="w-10 h-10 text-white" />
        </motion.div>

        {/* Orbiting Particles */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Sparkles className="w-6 h-6 text-primary-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            >
              <Zap className="w-6 h-6 text-secondary-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold gradient-text">Sai Tarun</h1>
          <p className="text-dark-400 text-lg">Data & Integrations Engineer</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-64 h-2 bg-dark-800 rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          />
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
              className="w-3 h-3 bg-primary-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen

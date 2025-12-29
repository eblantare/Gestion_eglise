// frontend/components/EnhancedLoadingSpinner.tsx
'use client'

import { motion } from 'framer-motion'

interface EnhancedLoadingSpinnerProps {
  message?: string
  fullScreen?: boolean
}

export default function EnhancedLoadingSpinner({ 
  message = 'Chargement...', 
  fullScreen = false 
}: EnhancedLoadingSpinnerProps) {
  const content = (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-blue-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-600 rounded-full"
          style={{ x: '-50%', y: '-50%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <motion.p
        className="mt-6 text-gray-600 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
      <motion.div
        className="flex gap-1 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-600 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {content}
      </div>
    )
  }

  return <div className="py-20">{content}</div>
}
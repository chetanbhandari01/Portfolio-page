import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-0 -left-1/2 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl dark:from-purple-900/20 dark:to-pink-900/20"
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-300/30 to-pink-300/30 rounded-full blur-3xl dark:from-purple-900/20 dark:to-pink-900/20"
        animate={{
          y: [0, -100, 0],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl dark:from-blue-900/10 dark:to-purple-900/10"
        animate={{
          y: [5, 150, 0],
          x: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 200 - 100, 0],
            x: [0, Math.random() * 200 - 100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />
    </div>
  )
}

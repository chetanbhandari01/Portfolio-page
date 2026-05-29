import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../constants'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const stats = STATS

  const AnimatedCounter = ({ value, suffix }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      const increment = value / 50
      const interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + increment
          return next >= value ? value : next
        })
      }, 30)

      return () => clearInterval(interval)
    }, [inView, value])

    return (
      <span className="font-display font-bold text-4xl sm:text-5xl glow-text">
        {Math.floor(count)}{suffix}
      </span>
    )
  }

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a Computer Science and Engineering in Artificial Intelligence student with strong interest in Competitive programming, machine learning, and full-stack development. I enjoy solving real-world problems through intelligent applications and modern software engineering practices.
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl font-display font-bold">My focus areas include:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  'Retrieval-Augmented Generation (RAG)',
                  'LLM-based systems',
                  'Machine Learning',
                  'Predictive analytics',
                  'Sentiment analysis',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy learning new technologies, experimenting with AI workflows, and building projects that combine practical functionality with clean user experiences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass"
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="space-y-3 text-center">
                  <div>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2, Zap, Brain } from 'lucide-react'

// Tech Stack Icon Component
const TechIcon = ({ name, icon: Icon, color, delay }) => (
  <motion.div
    className={`absolute w-16 h-16 rounded-2xl ${color} shadow-lg flex items-center justify-center border-2 border-white dark:border-gray-800`}
    animate={{
      y: [0, -30, 0],
      x: [0, Math.random() > 0.5 ? 25 : -25, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 5 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: delay,
    }}
    whileHover={{ scale: 1.1, rotate: 10 }}
    style={{
      top: `${20 + Math.floor(delay * 10) % 60}%`,
      left: delay % 2 === 0 ? '-90px' : 'auto',
      right: delay % 2 === 0 ? 'auto' : '-90px',
    }}
    title={name}
  >
    <Icon size={32} className="text-white" />
  </motion.div>
)

export default function Hero() {
  const techStack = [
    { 
      name: 'Python', 
      icon: Code2,
      color: 'bg-blue-500',
      delay: 0 
    },
    { 
      name: 'React', 
      icon: Zap,
      color: 'bg-cyan-400',
      delay: 0.3 
    },
    { 
      name: 'Node.js', 
      icon: Code2,
      color: 'bg-green-500',
      delay: 0.6 
    },
    { 
      name: 'TensorFlow', 
      icon: Brain,
      color: 'bg-orange-500',
      delay: 0.9 
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-50 via-white to-cream dark:from-slate-900 dark:via-black dark:to-slate-800 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/20 backdrop-blur-sm">
                <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  ✨ Competitive Programming • Full Stack Developer • ML Enthusiast
                </p>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-black dark:text-white">Hi, I'm </span>
                <span className="glow-text">Chetan</span>
                <span className="text-black dark:text-white">,</span>
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight text-gray-900 dark:text-gray-100">
                I build a Machine Learning systems and modern web experiences.
              </h2>
            </motion.div>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Computer Engineering student passionate about Artificial Intelligence, Machine Learning, RAG systems, and scalable software development. I enjoy building real-world AI applications with clean UI and practical problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all smooth-hover"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#resume"
                className="px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all smooth-hover flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com/chetanbhandari01', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/chetan-bhandari-9b5175336/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:chetanbhandari2005@gmail.com', label: 'Email' },
                { icon: Code2, href: 'https://leetcode.com/u/chetanbhandari/', label: 'LeetCode' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:border-purple-500 hover:text-white dark:hover:border-purple-500 transition-all smooth-hover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Portrait with Floating Tech Icons */}
          <motion.div
            className="relative h-96 lg:h-[500px] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Portrait Frame */}
            <motion.div
              className="relative w-72 h-96 rounded-3xl bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 p-1 shadow-2xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-gray-700">
                <img
                  src="https://i.pinimg.com/736x/e6/04/7a/e6047ad7beefc1cd22a43d030a1b39c0.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            {techStack.map((tech) => (
              <TechIcon key={tech.name} {...tech} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-gray-400 text-sm">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mt-2">
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2" animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  )
}

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Resume', id: 'resume', href: '#resume' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass dark:glass border-b border-white/10 dark:border-white/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold font-display"
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow-text">CB</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-purple-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-500'
                }`}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          animate={{ maxHeight: isOpen ? 400 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3 bg-white/80 dark:bg-black/80 backdrop-blur-md">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={`block text-sm font-medium py-2 ${
                  activeSection === item.id
                    ? 'text-purple-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-500'
                }`}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold mb-2">
              <span className="glow-text">Chetan Bhandari</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Competitive Programming • Full Stack Developer • ML Enthusiast 
            </p>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div
            className="flex justify-end items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Github, href: 'https://github.com/chetanbhandari01', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chetan-bhandari-9b5175336/', label: 'LinkedIn' },
              { icon: Mail, href: 'chetanbhandari2005@gmail.com', label: 'Email' },
              { icon: Code2, href: 'https://leetcode.com/u/chetanbhandari/', label: 'LeetCode' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors smooth-hover"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 dark:via-purple-500/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {currentYear} Chetan Bhandari. All rights reserved.
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-purple-500 text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-all smooth-hover"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

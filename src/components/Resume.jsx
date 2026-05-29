import React from 'react'
import { motion } from 'framer-motion'
import { Download, Eye } from 'lucide-react'

export default function Resume() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resumechetan(1).pdf'
    link.download = 'Chetan_Bhandari_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="resume"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
              Explore My Professional Journey
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Download my latest resume to explore my technical skills, projects, and experience in detail. I've included all my key achievements, technical expertise, and notable contributions to both academic and professional projects.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-gray-900 dark:text-white">
                What's included:
              </p>
              <ul className="space-y-2">
                {[
                  'Comprehensive technical skills and proficiencies',
                  'Detailed project portfolio and achievements',
                  'Academic background and coursework',
                  'Publications and research work',
                  'Professional experience and internships',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Resume Preview / Actions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Preview Box */}
            <div className="relative h-96 rounded-2xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 p-6 overflow-hidden glass">
              {/* Decorative PDF Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="text-8xl">📄</div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    RESUME DOCUMENT
                  </p>
                  <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                    Chetan Bhandari
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Competitive Programming • Full Stack Developer • ML Enthusiast
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full" />
                  <div className="h-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full w-3/4" />
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(139, 92, 246, 0)',
                    '0 0 40px rgba(139, 92, 246, 0.2)',
                    '0 0 0px rgba(139, 92, 246, 0)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all smooth-hover"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>

              <motion.a
                href="/resumechetan(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all smooth-hover"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye size={20} />
                View Resume
              </motion.a>
            </div>

            {/* Info Text */}
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>

        {/* Additional Resume Sections Teaser */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'Technical Skills', count: '12+', icon: '💻' },
            { title: 'Projects', count: '10+', icon: '🚀' },
            { title: 'Experience', count: '1+', icon: '⭐' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {item.title}
              </p>
              <p className="text-2xl font-display font-bold glow-text">
                {item.count}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

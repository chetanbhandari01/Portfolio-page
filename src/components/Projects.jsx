import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../constants'

export default function Projects() {
  const projects = PROJECTS

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              {/* Project Card */}
              <div className="h-full p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass space-y-6 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-4xl mb-3">{project.icon}</div>
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Key Features:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-purple-100/50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100/50 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    TECH STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2 py-1 rounded bg-white/50 dark:bg-white/5 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex gap-3">
                  <motion.a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium smooth-hover transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 smooth-hover transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(139, 92, 246, 0)',
                    '0 0 40px rgba(139, 92, 246, 0.3)',
                    '0 0 0px rgba(139, 92, 246, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in more? Check out my GitHub for additional projects.
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-500 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all smooth-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

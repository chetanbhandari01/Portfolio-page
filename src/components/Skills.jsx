import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', emoji: '🐍' },
        { name: 'JavaScript', emoji: '✨' },
        { name: 'TypeScript', emoji: '📘' },
        { name: 'C++', emoji: '⚙️' },
        { name: 'SQL', emoji: '🗄️' },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', emoji: '⚛️' },
        { name: 'Tailwind CSS', emoji: '🎨' },
        { name: 'HTML', emoji: '🏗️' },
        { name: 'CSS', emoji: '🎯' },
        { name: 'Framer Motion', emoji: '✨' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', emoji: '🟢' },
        { name: 'Express.js', emoji: '⚡' },
        { name: 'REST APIs', emoji: '🔌' },
        { name: 'MongoDB', emoji: '🍃' },
        { name: 'PostgreSQL', emoji: '🐘' },
      ],
    },
    {
      category: 'AI/ML',
      skills: [
        { name: 'TensorFlow', emoji: '🧠' },
        { name: 'Scikit-learn', emoji: '🤖' },
        { name: 'Pandas', emoji: '🐼' },
        { name: 'NumPy', emoji: '📊' },
        { name: 'RAG Pipelines', emoji: '🔗' },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git', emoji: '🌳' },
        { name: 'GitHub', emoji: '⭐' },
        { name: 'VS Code', emoji: '💻' },
        { name: 'Docker', emoji: '🐳' },
        { name: 'Postman', emoji: '📮' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass cursor-default"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2)',
                      y: -5,
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {skill.emoji}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                        initial={false}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

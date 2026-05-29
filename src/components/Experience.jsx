import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

export default function Experience() {
  const educationData = {
    degree: 'Computer Science and Engineering (Artificial Intelligence)',
    coursework: [
      'Data Structures',
      'DBMS',
      'Machine Learning',
      'Operating Systems',
      'Computer Networks',
      'Web Development',
      'AI/ML Specialization',
      
    ],
    achievements: [
      { icon: Award, text: 'Published research paper at ICMREST-2025' },
      { icon: BookOpen, text: 'Completed AI & ML courses' },
      { icon: GraduationCap, text: 'Focus on Artificial Intelligence specialization' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Education Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Timeline Line (Desktop) */}
              <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 opacity-30" />

              {/* Education Info */}
              <motion.div
                className="lg:col-span-2 p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                      {educationData.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Expected Graduation: 2028
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {educationData.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <achievement.icon className="text-purple-500 flex-shrink-0" size={20} />
                      <span>{achievement.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats Sidebar */}
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { label: 'Relevant Courses', value: '8+' },
                  { label: 'GPA', value: '9.0+' },
                  { label: 'Projects', value: '12+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 text-center hover:border-purple-500/50 transition-all smooth-hover glass"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-display font-bold glow-text">
                      {stat.value}
                    </div>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Relevant Coursework */}
          <motion.div
            className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {educationData.coursework.map((course, index) => (
                <motion.div
                  key={course}
                  className="p-3 rounded-lg bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-500/20 text-center hover:border-purple-500/50 transition-all smooth-hover cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {course}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

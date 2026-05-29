import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Brain, Database, Cpu, Palette } from 'lucide-react'

export default function TechStackShowcase() {
  const techCategories = [
    {
      category: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-blue-600',
      technologies: [
        { name: 'Python', icon: '🐍', color: 'bg-blue-500' },
        { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500' },
        { name: 'TypeScript', icon: '📘', color: 'bg-blue-600' },
        { name: 'C++', icon: '⚙️', color: 'bg-purple-600' },
        { name: 'SQL', icon: '🗄️', color: 'bg-orange-500' },
      ],
    },
    {
      category: 'Frontend',
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      technologies: [
        { name: 'React', icon: '⚛️', color: 'bg-cyan-400' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'bg-cyan-500' },
        { name: 'Framer Motion', icon: '✨', color: 'bg-purple-500' },
        { name: 'HTML5', icon: '🏗️', color: 'bg-orange-600' },
        { name: 'CSS3', icon: '🎯', color: 'bg-blue-500' },
      ],
    },
    {
      category: 'Backend',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      technologies: [
        { name: 'Node.js', icon: '🟢', color: 'bg-green-600' },
        { name: 'Express.js', icon: '⚡', color: 'bg-gray-700' },
        { name: 'MongoDB', icon: '🍃', color: 'bg-green-500' },
        { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-700' },
        { name: 'REST APIs', icon: '🔌', color: 'bg-purple-600' },
      ],
    },
    {
      category: 'AI/ML',
      icon: Brain,
      color: 'from-orange-500 to-red-600',
      technologies: [
        { name: 'TensorFlow', icon: '🧠', color: 'bg-orange-500' },
        { name: 'Scikit-learn', icon: '🤖', color: 'bg-orange-600' },
        { name: 'Pandas', icon: '🐼', color: 'bg-blue-600' },
        { name: 'NumPy', icon: '📊', color: 'bg-purple-600' },
        { name: 'LangChain', icon: '🔗', color: 'bg-red-600' },
      ],
    },
    {
      category: 'Tools',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      technologies: [
        { name: 'Git', icon: '🌳', color: 'bg-orange-600' },
        { name: 'GitHub', icon: '⭐', color: 'bg-gray-800' },
        { name: 'VS Code', icon: '💻', color: 'bg-blue-500' },
        { name: 'Docker', icon: '🐳', color: 'bg-blue-600' },
        { name: 'Postman', icon: '📮', color: 'bg-orange-500' },
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
          Tech Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Technologies I work with to build amazing solutions
        </p>
      </motion.div>

      {/* Tech Categories Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techCategories.map((category) => {
          const CategoryIcon = category.icon
          return (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="group"
            >
              {/* Category Header */}
              <motion.div
                className={`h-full rounded-2xl bg-gradient-to-br ${category.color} p-6 text-white shadow-lg hover:shadow-xl transition-all smooth-hover flex flex-col`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/20">
                    <CategoryIcon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.category}</h3>
                </div>

                {/* Technologies */}
                <div className="space-y-3 flex-grow">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative bottom */}
                <motion.div
                  className="mt-4 h-1 bg-white/30 rounded-full"
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Floating Animation Background */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  )
}

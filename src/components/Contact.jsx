import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, Code2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/chetanbhandari01',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chetan-bhandari-9b5175336/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'chetanbhandari2005@gamil.com',
      color: 'hover:text-red-600',
    },
    {
      icon: Code2,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/chetanbhandari/',
      color: 'hover:text-yellow-600',
    },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
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
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Let's build something amazing together. Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <form
              onSubmit={handleSubmit}
              className="h-full p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass space-y-6 flex flex-col"
            >
              {/* Name Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/50 dark:border-gray-600/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/30 transition-all smooth-hover text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/50 dark:border-gray-600/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/30 transition-all smooth-hover text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="space-y-2 flex-grow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/50 dark:border-gray-600/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/30 transition-all smooth-hover text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all smooth-hover disabled:opacity-75 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>
                    <span>✓</span>
                    <span>Message sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  className="text-sm text-green-600 dark:text-green-400 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8 h-full flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Info Boxes */}
            <div className="space-y-4">
              {[
                {
                  title: 'Email',
                  value: 'chetanbhandari2005@gmail.com',
                  icon: '✉️',
                },
                {
                  title: 'Location',
                  value: 'Pune ,India',
                  icon: '📍',
                },
                {
                  title: 'Availability',
                  value: 'Open to opportunities',
                  icon: '🚀',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-purple-200/30 dark:border-purple-500/10 hover:border-purple-500/50 transition-all smooth-hover glass"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    {item.title}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Follow me on social media
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:border-purple-500 dark:hover:border-purple-500 transition-all smooth-hover ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={24} className="text-gray-700 dark:text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

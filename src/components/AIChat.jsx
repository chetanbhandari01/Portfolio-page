import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, MessageCircle, Loader } from 'lucide-react'

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Chetan's AI assistant. Ask me about his projects, skills, or experience!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()

    // AI responses based on keywords
    if (message.includes('hello') || message.includes('hi')) {
      return "Hey there! 👋 I'm Chetan's AI assistant. Feel free to ask me anything about his portfolio, projects, or skills!"
    }

    if (message.includes('project')) {
      return "Chetan has built some amazing projects! 🚀\n\n• AI Support Triage Agent (RAG architecture)\n• Stock Price Prediction System (LSTM)\n• URL Shortener Application (Full-stack)\n\nWant details about any of these?"
    }

    if (message.includes('skill')) {
      return "Here are Chetan's main skills:\n\n💻 Languages: Python, JavaScript, TypeScript, C++, SQL\n🎨 Frontend: React, Tailwind CSS, Framer Motion\n⚙️ Backend: Node.js, Express.js, MongoDB\n🧠 AI/ML: TensorFlow, Scikit-learn, Pandas, NumPy\n🛠️ Tools: Git, Docker, VS Code\n\nWhat interests you most?"
    }

    if (message.includes('experience') || message.includes('education')) {
      return "Chetan is a Computer Engineering student specializing in Artificial Intelligence. 🎓\n\n📚 Relevant Coursework:\n• Data Structures\n• Machine Learning\n• DBMS\n• Operating Systems\n• Computer Networks\n• Web Development\n\nPublished research paper at ICMREST-2025 📝"
    }

    if (message.includes('contact') || message.includes('email')) {
      return "You can reach Chetan here:\n\n📧 Email: chetan.bhandari@example.com\n🐙 GitHub: github.com/chetanbhandari01\n💼 LinkedIn: linkedin.com/in/chetan-bhandari-9b5175336/\n\nFeel free to connect!"
    }

    if (message.includes('resume')) {
      return "You can download Chetan's resume from the Resume section on the portfolio! 📄\n\nIt includes all his technical skills, projects, and experience details."
    }

    if (message.includes('ai') || message.includes('ml') || message.includes('machine learning')) {
      return "Chetan is passionate about AI/ML! 🤖\n\nSpecialties:\n• Retrieval-Augmented Generation (RAG)\n• LLM-based systems\n• Machine Learning\n• Predictive Analytics\n• Sentiment Analysis\n\nHe loves building intelligent solutions!"
    }

    if (message.includes('rag')) {
      return "RAG (Retrieval-Augmented Generation) is one of Chetan's specialties! 🔗\n\nIt combines:\n• Information retrieval from knowledge bases\n• Large Language Models (LLMs)\n• Context-aware responses\n\nPerfect for building smart AI systems without hallucinations!"
    }

    if (message.includes('hire') || message.includes('job') || message.includes('opportunity')) {
      return "Great! Chetan is always open to exciting opportunities! 🚀\n\nYou can reach out via:\n📧 chetan.bhandari@example.com\n💼 LinkedIn: linkedin.com/in/chetan-bhandari-9b5175336/\n\nLooking forward to connecting!"
    }

    if (message.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask more questions or explore the portfolio!"
    }

    if (message.includes('?')) {
      return "Great question! 🤔\n\nI can help you with:\n• Projects & Portfolio\n• Technical Skills\n• Experience & Education\n• Contact Information\n• AI/ML Topics\n\nWhat would you like to know?"
    }

    return "That's interesting! 💭\n\nI can help with questions about:\n• Chetan's projects\n• His skills and expertise\n• His experience\n• How to contact him\n• AI/ML concepts\n\nAsk me anything! 😊"
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI thinking
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-4 w-96 max-w-[calc(100vw-32px)] h-96 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden z-40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-lg">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Chetan's AI Assistant</h3>
                  <p className="text-xs text-white/80">Always online</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap text-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-br-none'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
                    <Loader size={16} className="animate-spin text-purple-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-300">Thinking...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center z-40 overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>

        {/* Pulse animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500"
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  )
}

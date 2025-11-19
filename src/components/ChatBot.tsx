import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquareIcon, XIcon, SendIcon, SparklesIcon } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const quickActions = [
  {
    label: 'Feeling burned out',
    topic: 'burnout',
  },
  {
    label: 'Imposter syndrome',
    topic: 'imposter',
  },
  {
    label: 'Work-life balance',
    topic: 'balance',
  },
  {
    label: 'Deployment anxiety',
    topic: 'anxiety',
  },
]
const botResponses: Record<string, string> = {
  burnout:
    "I understand burnout can be overwhelming. It's common among developers, especially with tight deadlines and on-call rotations. Let's talk about what you're experiencing. What aspects of work are feeling most draining right now?",
  imposter:
    "Imposter syndrome affects so many developers, even experienced ones. Remember, feeling like you don't know enough is often a sign you're growing and learning. What specific situations trigger these feelings for you?",
  balance:
    "Work-life balance is crucial for long-term wellbeing. As a developer, it can be hard to 'switch off' mentally. What does your current routine look like, and where do you feel the boundaries are blurring?",
  anxiety:
    "Deploy anxiety is completely normal - you care about your work and its impact. Let's explore some techniques to manage that stress. What part of the deployment process causes you the most worry?",
  default:
    "I'm here to support you. Whether it's stress, burnout, imposter syndrome, or just needing someone to talk to - I'm listening. What's on your mind today?",
}
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your devspace AI companion. I'm here to provide support and understanding for the unique challenges you face as a developer. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])
  const handleSendMessage = (text: string) => {
    if (!text.trim()) return
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    // Simulate AI response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses.default,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }
  const handleQuickAction = (topic: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: quickActions.find((a) => a.topic === topic)?.label || '',
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[topic] || botResponses.default,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }
  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition-colors group"
          >
            <MessageSquareIcon className="w-6 h-6" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Chat with AI support
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Overlay */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Chat Container */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 100,
                scale: 0.9,
              }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
              }}
              className="fixed bottom-6 right-6 z-50 w-full md:w-96 h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden md:max-w-md mx-4 md:mx-0"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-teal-600 to-teal-700 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    <SparklesIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Support Companion</h3>
                    <p className="text-xs text-teal-100">
                      Always here to listen
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.sender === 'user' ? 'bg-teal-600 text-white rounded-br-sm' : 'bg-white text-slate-800 rounded-bl-sm shadow-sm'}`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${message.sender === 'user' ? 'text-teal-100' : 'text-slate-400'}`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                      <div className="flex space-x-2">
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{
                            y: [0, -8, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{
                            y: [0, -8, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.1,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{
                            y: [0, -8, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.2,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="px-4 py-3 bg-white border-t border-slate-200"
                >
                  <p className="text-xs text-slate-600 mb-2 font-medium">
                    Quick topics:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.topic}
                        onClick={() => handleQuickAction(action.topic)}
                        className="text-xs bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full hover:bg-teal-100 transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Input Area */}
              <form
                onSubmit={handleSubmit}
                className="p-4 bg-white border-t border-slate-200"
              >
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <SendIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  This is a demo. Real AI integration coming soon.
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

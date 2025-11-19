import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SendIcon,
  SparklesIcon,
  RefreshCwIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Initialize Gemini AI
const getApiKey = (): string => {
  const envApiKey = import.meta.env?.VITE_GEMINI_API;
  return envApiKey;
};

const apiKey = getApiKey();
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI
  ? genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
  : null;

// Rate limiting helper
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 3000; // 3 seconds between requests

// Generate AI response using Gemini
const generateAIResponse = async (
  userMessage: string,
  conversationHistory: Message[] = []
): Promise<string> => {
  if (!model) {
    return "I'm currently unable to provide AI-powered responses. Please check that your API key is configured correctly.";
  }

  try {
    // Rate limiting: wait if needed
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
      const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
    lastRequestTime = Date.now();

    // Build conversation context from history (reduced to save tokens)
    const historyContext = conversationHistory
      .slice(-4) // Last 4 messages for context
      .map(
        (msg) => `${msg.sender === "user" ? "User" : "Assistant"}: ${msg.text}`
      )
      .join("\n");

    const prompt = `You are a compassionate mental health assistant for DevSpace, supporting developers.

${historyContext ? `Context:\n${historyContext}\n` : ""}
User: "${userMessage}"

Be warm, concise (2-3 sentences), use emojis sparingly. Suggest therapist search if distressed, mental load dump to vent, or general chat. Validate feelings and normalize developer challenges.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error: any) {
    console.error("Error generating AI response:", error);

    // Handle rate limit error specifically
    if (
      error?.status === 429 ||
      error?.message?.includes("429") ||
      error?.message?.includes("quota")
    ) {
      return "I'm getting too many requests right now. 😅 Please wait a moment and try again. The free tier has rate limits.";
    }

    return "I apologize, I'm having trouble connecting right now. 😔 Please try again in a moment.";
  }
};

const quickActions = [
  {
    label: "Feeling burned out",
    topic: "burnout",
    emoji: "🔥",
  },
  {
    label: "Imposter syndrome",
    topic: "imposter",
    emoji: "🎭",
  },
  {
    label: "Work-life balance",
    topic: "balance",
    emoji: "⚖️",
  },
  {
    label: "Deployment anxiety",
    topic: "anxiety",
    emoji: "😰",
  },
  {
    label: "Team conflicts",
    topic: "conflict",
    emoji: "👥",
  },
  {
    label: "Career guidance",
    topic: "career",
    emoji: "🚀",
  },
];

export default function ChatBotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your DevSpace AI companion. 👋 I'm here to provide support and understanding for the unique challenges you face as a developer. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      if (isLarge) {
        setShowSidebar(true); // Show sidebar by default on large screens
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Auto-focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Generate AI response with conversation history
      const aiResponse = await generateAIResponse(text.trim(), messages);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error in handleSendMessage:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, something went wrong. Please try sending your message again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = async (label: string) => {
    if (isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: label,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    if (!isLargeScreen) {
      setShowSidebar(false); // Close sidebar on mobile
    }

    try {
      // Use AI to respond to quick action
      const aiResponse = await generateAIResponse(label, messages);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error in handleQuickAction:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, something went wrong. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleNewConversation = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: "Hi! I'm your DevSpace AI companion. 👋 I'm here to provide support and understanding for the unique challenges you face as a developer. How are you feeling today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    if (!isLargeScreen) {
      setShowSidebar(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="flex mx-auto max-w-8xl h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-1 gap-90 bg-linear-to-br from-slate-50 to-slate-100">
        {/* Sidebar */}
        <AnimatePresence>
          {showSidebar && (
            <>
              {/* Mobile Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowSidebar(false)}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
              />
            </>
          )}
        </AnimatePresence>

        <motion.aside
          initial={false}
          animate={{
            x: isLargeScreen ? 0 : (showSidebar ? 0 : -320),
          }}
          className="fixed lg:relative z-50 w-80 h-full bg-white border-r border-slate-200 shadow-lg lg:shadow-none flex flex-col"
          style={{
            position: isLargeScreen ? 'relative' : 'fixed'
          }}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-linear-to-br from-teal-500 to-teal-600 p-2.5 rounded-xl">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-800">DevSpace AI</h2>
                  <p className="text-xs text-slate-500">
                    Mental Health Support
                  </p>
                </div>
              </div>
              {!isLargeScreen && (
                <button
                  onClick={() => setShowSidebar(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <XIcon className="w-5 h-5 text-slate-600" />
                </button>
              )}
            </div>

            <button
              onClick={handleNewConversation}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors"
            >
              <RefreshCwIcon className="w-4 h-4" />
              <span className="font-medium">New Conversation</span>
            </button>
          </div>

          {/* Quick Topics */}
          <div className="flex-1 flex-row overflow-y-auto p-6 mb-20">
            <h3 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">
              Quick Topics
            </h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <button
                  key={action.topic}
                  onClick={() => handleQuickAction(action.label)}
                  disabled={isTyping}
                  className="w-full flex items-center space-x-3 px-4 py-3 bg-slate-50 hover:bg-teal-50 rounded-xl transition-colors text-left group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-2xl">{action.emoji}</span>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-teal-700">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col max-w-7xl mx-auto">
          {/* Header */}
          <header className="bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <MenuIcon className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </header>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="max-w-4xl mx-auto w-full">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } mb-6`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                      message.sender === "user"
                        ? "bg-linear-to-br from-teal-600 to-teal-700 text-white rounded-br-sm shadow-lg"
                        : "bg-white text-slate-800 rounded-bl-sm shadow-md border border-slate-200"
                    }`}
                  >
                    <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                      {message.text}
                    </p>
                    <p
                      className={`text-xs mt-2 ${
                        message.sender === "user"
                          ? "text-teal-100"
                          : "text-slate-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
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
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="flex justify-start mb-6"
                >
                  <div className="bg-white rounded-2xl rounded-bl-sm px-5 py-4 shadow-md border border-slate-200">
                    <div className="flex space-x-2">
                      <motion.div
                        className="w-2.5 h-2.5 bg-teal-500 rounded-full"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-2.5 h-2.5 bg-teal-500 rounded-full"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: 0.1,
                        }}
                      />
                      <motion.div
                        className="w-2.5 h-2.5 bg-teal-500 rounded-full"
                        animate={{
                          y: [0, -10, 0],
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
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-slate-200 m-2 p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto w-full">
              <div className="flex space-x-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 px-5 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-[15px] transition-all"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-linear-to-br from-teal-600 to-teal-700 text-white px-6 py-4 rounded-2xl hover:from-teal-700 hover:to-teal-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <SendIcon className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">
                Your conversations are private and powered by AI • Press Enter
                to send
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

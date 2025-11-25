import { motion } from "framer-motion";
import {
  Sparkles,
  Moon,
  Sunrise,
  Brain,
  MessageCircle,
  User,
  AlertCircle,
  TrendingUp,
  Calendar,
  Menu,
} from "lucide-react";
import type { SessionType } from "./Session";
import Sidebar from "../../components/layout/Sidebar";
import { useState } from "react";
import { Header } from "../../components/layout/Header";

export const Dashboard = ({ onSelectSession }: { onSelectSession: (type: SessionType) => void }) => {
  const sessions = [
    {
      type: "dump" as SessionType,
      icon: AlertCircle,
      title: "Mental Load Dump",
      description: "Vent freely without judgment. Get it all out.",
      color: "from-purple-500 to-purple-600",
      emoji: "💭",
    },
    {
      type: "morning" as SessionType,
      icon: Sunrise,
      title: "Morning Check-in",
      description: "Start your day with intention and clarity.",
      color: "from-amber-500 to-orange-600",
      emoji: "☀️",
    },
    {
      type: "night" as SessionType,
      icon: Moon,
      title: "Night Reflection",
      description: "Wind down, reflect, and prepare for rest.",
      color: "from-indigo-500 to-indigo-600",
      emoji: "🌙",
    },
    {
      type: "mindmap" as SessionType,
      icon: Brain,
      title: "Code Logic Walk",
      description: "Think through complex problems together.",
      color: "from-teal-500 to-teal-600",
      emoji: "🧠",
    },
    {
      type: "chat" as SessionType,
      icon: MessageCircle,
      title: "Casual Chat",
      description: "Just talk. About anything, really.",
      color: "from-blue-500 to-blue-600",
      emoji: "💬",
    },
    {
      type: "therapist" as SessionType,
      icon: User,
      title: "Find a Therapist",
      description: "Connect with professional mental health support.",
      color: "from-rose-500 to-rose-600",
      emoji: "🤝",
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentSession, setCurrentSession] = useState<SessionType | null>(null);
  const [currentPage, setCurrentPage] = useState("dashboard");
  console.log("Current page:", currentPage);

  const handleSessionSelect = (session: SessionType) => {
    setCurrentSession(session);
    onSelectSession(session);
  };

  return (
    <div className="flex h-screen bg-linear-to-br from-slate-50 via-slate-100 to-slate-200">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentSession={currentSession}
        onSessionSelect={handleSessionSelect}
        onNavigate={(page) => {
          setCurrentPage(page);
          console.log("Navigate to:", page);
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
          <div className="w-10" />
          
          {/* User Profile */}
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-10 h-10 bg-linear-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 text-sm">John Doe</p>
              <p className="text-xs text-slate-500">Developer</p>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12 mt-8"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-linear-to-br from-teal-500 to-teal-600 p-3 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-800 mb-3">DevSpace</h1>
              <h3 className="text-xl font-medium text-slate-600 mb-2">Welcome back, Developer!</h3>
              <p className="text-slate-600 text-lg">Your mental health companion for developers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <h3 className="font-semibold text-slate-800">Weekly Burnout Assessment</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Next check: 3 days</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex-1 bg-slate-100 rounded-full h-2">
                  <div className="bg-linear-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{ width: "35%" }} />
                </div>
                <span className="text-sm font-medium text-teal-600">Low Risk</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions.map((session, index) => (
                <motion.button
                  key={session.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 2) }}
                  onClick={() => handleSessionSelect(session.type)}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all text-left group hover:scale-105"
                >
                  <div className={`bg-linear-to-br ${session.color} p-3 rounded-xl inline-block mb-4`}>
                    <session.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center space-x-2">
                    <span>{session.title}</span>
                    <span className="text-2xl">{session.emoji}</span>
                  </h3>
                  <p className="text-slate-600 text-sm">{session.description}</p>
                </motion.button>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-slate-500 text-sm mt-12"
            >
              🔒 All sessions are confidential and temporary.
            </motion.p>
          </div>
        </main>
      </div>
    </div>
  );
};
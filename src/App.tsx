import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Resources } from "./pages/Resources";
import { ChatBot } from "./components/ChatBot";
import { Therapists } from "./pages/Therapists";
import ChatBotPage from "./pages/Chatbot";
import Conversation from "./Dashboards/therapist/conversation";
import { useState } from "react";
import { Dashboard } from "./Dashboards/dev/Dashboard";
import { Provider, useSelector } from "react-redux";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import type { RootState } from "./app/store";
import { store } from "./app/store";
import { TherapistFinder } from "./Dashboards/dev/TherapistFinder";
import { SessionChat } from "./Dashboards/dev/Session";

type SessionType =
  | "dump"
  | "morning"
  | "night"
  | "mindmap"
  | "chat"
  | "therapist"
  | null;

// Layout component for authenticated pages
export const AuthenticatedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <ChatBot />
      <Footer />
    </div>
  );
};

const AppRouter = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.userAuth);

  const [currentSession, setCurrentSession] = useState<SessionType>(null);

  if (currentSession === "therapist") {
    return <TherapistFinder onBack={() => setCurrentSession(null)} />;
  }

  if (currentSession) {
    return (
      <SessionChat
        sessionType={currentSession}
        onBack={() => setCurrentSession(null)}
      />
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <ProtectedRoute requireAuth={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute requireAuth={false}>
                <Register />
              </ProtectedRoute>
            }
          />

            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/therapists" element={<Therapists />} />
            <Route path="/chatbot" element={<ChatBotPage />} />
            <Route path="/dev/chat" element={<Conversation />} />
            <Route
              path="/dev/dashboard"
              element={<Dashboard onSelectSession={setCurrentSession} />}
            />

          {/* Protected routes */}

          {/* <Route 
          path="/users" 
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <UsersDashboard />
              </AuthenticatedLayout>
            </ProtectedRoute>
          } 
        /> */}

          {/* Default redirect */}
          <Route
            path="/"
            element={
              <Navigate
                to={isAuthenticated ? "/dashboard" : "/login"}
                replace
              />
            }
          />

          {/* Catch all route */}
          <Route
            path="*"
            element={
              <Navigate
                to={isAuthenticated ? "/dashboard" : "/login"}
                replace
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

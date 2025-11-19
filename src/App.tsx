import { Routes, Route } from "react-router-dom";
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
export function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/therapists" element={<Therapists />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

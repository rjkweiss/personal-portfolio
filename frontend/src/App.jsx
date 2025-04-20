import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Timeline from "./pages/Timeline";

function App() {

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900 min-h-screen transition-colors duration-700 ease-in-out scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/experiences" element={<Timeline />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

    </div>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";

function App() {

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900 min-h-screen transition-colors duration-700 ease-in-out scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </div>
  )
}

export default App

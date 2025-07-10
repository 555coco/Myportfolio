import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Project from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"
import { Toaster, ToastIcon } from "react-hot-toast"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 

      <Toaster />
    </>
  )
}

export default App

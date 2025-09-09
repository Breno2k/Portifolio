import './App.css'

// Components
import Navbar from './components/navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

// Hooks
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <div className="main-container">
        <Navbar />
        <Home id="#home" />
        <About id="#about" />
        <Projects id="#project" />
        <Contact id="#contact" />
      </div>

    </>
  )
}

export default App

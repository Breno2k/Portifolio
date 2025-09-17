import './App.css'

// Components
import Navbar from './components/navbar/Navbar'

// Sections
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Home from './sections/Home/Home'

function App() {


  return (
    <>
      <div className="main-container">
        <Navbar />
        <div
          data-bs-spy="scroll"
          data-bs-target="#mainNav"
          data-bs-offset="80"
          data-bs-smooth-scroll="true"
          className="scrollspy-example"
          tabIndex="0"
        >
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Projects />
          </section>
        </div>
      </div>
    </>
  )
}

export default App

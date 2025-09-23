import './App.css'

// Components
import Navbar from './components/navbar/Navbar'

// Sections
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Home from './sections/Home/Home'
import Iridescence from './components/React Bits/Iridescente'

function App() {


  return (
    <>
      <Iridescence
        color={[0.6, 0, 0.6]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
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
      <footer>
        <h6>© 2025 Breno Melo. Todos os direitos reservados.</h6>
      </footer>
    </>
  )
}

export default App

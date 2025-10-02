import './App.css'

// Components
import Navbar from './components/Navbar/Navbar'

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Sections
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Home from './sections/Home/Home'
import Iridescence from './components/React Bits/Iridescente'

// Pages
import Details from './page/Details';

function App() {


  return (
    <>
      <Iridescence
        color={[0.2, 0, 0.2]}
        mouseReact={true}
        amplitude={0.1}
        speed={1.0}
      />
      <div className="main-container">

        <Routes>
          <Route path='/'
            element={
              <div
                data-bs-spy="scroll"
                data-bs-target="#mainNav"
                data-bs-offset="80"
                data-bs-smooth-scroll="true"
                className="scrollspy-example"
                tabIndex="0"
              >
                <Navbar />
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
            } />

          <Route path="/details" element={<Details />} />
        </Routes>

      </div>
      <footer>
        <h6>© 2025 Breno Melo. Todos os direitos reservados.</h6>
      </footer>

    </>
  )
}

export default App

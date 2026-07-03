import { Navbar, Footer } from './components/layout/index.js';
import { Hero, About, Skills, Projects, Experience, Contact } from './components/sections/index.js';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Academics from './components/sections/Academics'
import Campus from './components/sections/Campus'
import Admissions from './components/sections/Admissions'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import ThemeToggle from './components/animation/ThemeToggle'

const App = () => {
  return (
    <div className="app">
      <ScrollProgress />
      <CustomCursor />
      <ThemeToggle />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <Campus />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

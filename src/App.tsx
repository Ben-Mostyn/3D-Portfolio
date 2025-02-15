import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import HomePage from './components/HomePage/HomePage'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <>
      <div className='mainContainer'>
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </div>

    </>
  )
}

export default App

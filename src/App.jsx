import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Sections/Hero'
import About from './Components/Sections/About'
import Benifits from './Components/Sections/Benifits'
import Gallery from './Components/Sections/Gallery'
import Contact from './Components/Sections/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Benifits />
      <Gallery />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App

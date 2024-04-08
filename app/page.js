"use client"
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'

const page = () => {
  return (
    <div className='dark:bg-slate-900 duration-200'>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  )
}

export default page
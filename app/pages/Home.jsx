import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div className='dark:bg-slate-900 duration-200'>
    <Hero  />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home
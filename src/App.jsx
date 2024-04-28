import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import { Campus } from './Components/Campus/Campus'
import { Testimonials } from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Title subtitle = 'Our Program' title = 'What We Offer'/>
      <div className='container'>
        <Programs/>
      </div>
      <About/>
      <Title subtitle='Gallery' title='Campus Pictures'/>
      <Campus/>
      <Title subtitle='Testimonials' title='What a Student Says'/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App
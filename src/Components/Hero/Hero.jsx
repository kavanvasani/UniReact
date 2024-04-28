import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero container'>
        <div className='hero-text'>
            <h2>We ensure education</h2>
            <p>Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
                Dolorem, nesciunt. Eum perspiciatis
                 tempora fuga! Neque at error vero 
                 libero numquam, cum, explicabo repellat 
                 voluptates earum magni doloremque quia qui totam.</p>
            <button className='btn'>Explore more <img src={darkarrow}></img></button>
        </div>
    </div>
  )
}

export default Hero
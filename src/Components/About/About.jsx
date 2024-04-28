import React from 'react'
import './About.css'
import img_about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={img_about} className='about-img'></img>
            <img src={play_icon} className='play-icon'></img>
        </div>
        <div className='about-right'>
            <h3>About the University</h3>
            <h2>Nurturing the Future</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis qui minima dolore, maxime consequatur vel rem tempore excepturi,
                laborum quasi voluptate ad autem fugiat esse sint. Est ut quasi beatae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis qui minima dolore, maxime consequatur vel rem tempore excepturi,
                laborum quasi voluptate ad autem fugiat esse sint. Est ut quasi beatae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis qui minima dolore, maxime consequatur vel rem tempore excepturi,
                laborum quasi voluptate ad autem fugiat esse sint. Est ut quasi beatae.</p>
        </div>
    </div>
  )
}

export default About
import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'



const NavBar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);
  }

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 550 ? setSticky(true) : setSticky(false);
    })
  }, []);
  return (
    <nav className={`container ${sticky? 'dark-nav': '' }`}>
        <img src={logo} alt='' className='logo'></img>
        <ul className={mobileMenu ? ' ' : 'hide-menu'}>

            <li><Link to='Hero' smooth ={true} offset = {0} duration = {500}>Home</Link></li> 
            <li><Link to='programs' smooth ={true} offset = {-250} duration = {500}>Programs</Link></li>
            <li><Link to='about' smooth ={true} offset = {-150} duration = {500}>About Us</Link></li>
            <li><Link to='campus' smooth ={true} offset = {-240} duration = {500}>Campus</Link></li>
            <li><Link to='testimonials' smooth ={true} offset = {-240} duration = {500}>Testimonials</Link></li>
            <li><Link to='contact' smooth ={true} offset = {0} duration = {500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  )
}

export default NavBar
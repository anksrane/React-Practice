import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LineSvg from './LineSvg';
import './Hero.css'

function Hero() {
  return (
    <section className='hero-outer-container'>
      <div className="container">
        <div className="hero-inner-container">
          <div className="hero-left-section">
            <h1 className='hero-heading'>Frontend Developer</h1>           
            <h2 className='hero-content'>I'm Ankit Rane, a passionate frontend developer crafting clean, impactful, and user-focused web experiences.</h2>
            <div className="social-links-container">
              <a href="https://github.com/yourusername" className='social-links' target="_blank" rel="noopener noreferrer">
                <FaGithub className='social-icons'/> GitHub
              </a>            
              <a href="https://github.com/yourusername" className='social-links' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='social-icons'/> LinkedIn
              </a>            
              <a href="https://github.com/yourusername" className='social-links' target="_blank" rel="noopener noreferrer">
                <MdEmail className='social-icons'/> Gmail
              </a>            
            </div>
          </div>
          <div className="line-container">
            <LineSvg />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import LineSvg from './LineSvg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css'

gsap.registerPlugin(useGSAP);

function Hero() {
  useGSAP(()=>{
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // hero left animation
    tl.from(".hero-left-section",{
      opacity:0,
      x: -100,
    })

    // line-container animation
    tl.from(".line-container",{
      opacity:0,
      x: 100,
    },"-=0.5")

    // stagger text
    .from(
      [".hero-heading", ".hero-content", ".social-links-container a"],{
      opacity: 0,
      y: 20,
      stagger: 0.15,
    },"-=0.5")
  })

  return (
    <div className='hero-outer-container'>
      <div className="container">
        <div className="hero-inner-container">
          <div className="hero-left-section">
            <h1 className='hero-heading'>Frontend Developer</h1>           
            <h2 className='hero-content'>I'm <strong>Ankit Rane</strong>, a passionate frontend developer crafting clean, impactful and user-focused web experiences.</h2>
            <div className="social-links-container">
              <a href="https://github.com/anksrane" className='social-links' target="_blank" rel="noopener noreferrer">
                <FaGithub className='social-icons'/> GitHub
              </a>            
              <a href="https://www.linkedin.com/in/ankit-rane" className='social-links' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='social-icons'/> LinkedIn
              </a>            
              <a href="mailto:ankitrane900@gmail.com" className='social-links' target="_blank" rel="noopener noreferrer">
                <MdEmail className='social-icons'/> Gmail
              </a>            
              <a href="tel:8082466900" className='social-links' target="_blank" rel="noopener noreferrer">
                <IoCall className='social-icons'/> Call
              </a>            
            </div>
          </div>
          <div className="line-container">
            <LineSvg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
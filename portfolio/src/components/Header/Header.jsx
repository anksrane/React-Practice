import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css'

function Header() {


  return (
    <header>
    <nav className="navbar">
      <div className="nav-container">
        <Link className="navbar-brand" to="/">
          @nkit
        </Link>
        <button className='hamButton'
        onClick={()=>{
          document.querySelector('.nav-links').classList.toggle('active');
        }}
        ><i className="ri-menu-line"></i></button>
        <div className="nav-collapse">
          <button className='closeButton'><i className="ri-close-circle-fill"></i></button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Journey">
                Journey
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header

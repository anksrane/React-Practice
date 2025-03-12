import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
    <nav className="navbar">
      <div className="nav-container">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>
        <div className="navbar-collapse" id="navbar-tabs">
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

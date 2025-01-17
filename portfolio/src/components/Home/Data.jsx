import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import "./Home.css";
import hand from '../../assets/hand-svg.svg'

function Data() {
  return (
    <div className='data-main-container'>
      <h1 className='name'>Ankit Rane <img src={hand} alt="" className='img-responsive'/></h1>
      <h5 className="position">Frontend Developer</h5>
      <p className='info'>I am Frontend Developer based in India, and I am very passionate and dedicated to my work</p>
      <Button />
    </div>
  )
}

export default Data

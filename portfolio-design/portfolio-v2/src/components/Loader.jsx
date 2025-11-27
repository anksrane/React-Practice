import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className='background'>
        <div className="loader">
        <div className="box">
            <div className="logo">
            <span className="logo-text">AR</span>
            </div>
        </div>

        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        </div>      
    </div>
  )
}

export default Loader

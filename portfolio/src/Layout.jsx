import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import videoBg from './assets/video/vid3.mp4';

function Layout() {
  return (
    <div className='main-wrapper'>
      <div className="video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout

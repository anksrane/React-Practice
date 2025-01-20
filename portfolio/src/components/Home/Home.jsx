import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import homeBanner from '../../assets/about.jpg';

function Home() {
  return (
    <div className="container home-container">
      <div className="home-container-grid">
        <Social />
        <div className="img-container">
          <img src={homeBanner} alt="profileImage" className="profile_img" />
        </div>
        <Data />
      </div>
    </div>
  );
}

export default Home;

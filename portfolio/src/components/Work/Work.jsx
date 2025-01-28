import React from "react";
import img1 from "../../assets/image/g20.jpg";
import img2 from "../../assets/image/vijay-tanks.jpg";
import img3 from "../../assets/image/birla.jpg";
import img4 from "../../assets/image/stockholding.jpg";
import "./Work.css";

const worklist = [
  { src: img1, heading: 'G20', link: 'https://www.motherofdemocracyg20.com/' },
  { src: img2, heading: 'Vijay Tanks', link: 'https://www.vijaytanks.com/' },
  { src: img3, heading: 'Birla', link: 'https://www.birlaa1.com/birla-a1-locator-dealer.php' },
  { src: img4, heading: 'Stockholding', link: 'https://www.stockholding.com/' },
];

function Work() {
  return (
    <div className="work-container">
      <h1>Work</h1>
    </div>
  );
}

export default Work;

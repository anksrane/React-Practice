import { useState , useEffect } from 'react';
import ImageDisplay from "./ImageDisplay";
import NameList from "./NameList";
import "./Work.css";
import img1 from "./../../assets/image/g20.jpg";  
import img2 from "./../../assets/image/vijay-tanks.jpg";
import img3 from "./../../assets/image/birla.jpg";
import img4 from "./../../assets/image/stockholding.jpg";

const worklist = [
  { id: 1, src: img1, heading: "G20", link: "https://www.motherofdemocracyg20.com/" },
  { id: 2, src: img2, heading: "Vijay Tanks", link: "https://www.vijaytanks.com/" },
  { id: 3, src: img3, heading: "Birla", link: "https://www.birlaa1.com/birla-a1-locator-dealer.php" },
  { id: 4, src: img4, heading: "Stockholding", link: "https://www.stockholding.com/" },
];

function Work() {
  const [selectedWork, setSelectedWork] = useState(worklist[0]);
  return (
    <div className="app-container">
      <h1>Work</h1>
      <div className="content">
        <ImageDisplay selectedImage={selectedWork.src} /> 
        <NameList worklist={worklist} setSelectedWork={setSelectedWork} />
      </div>
    </div>
  );
}

export default Work;
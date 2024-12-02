/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Style.css";
import Slide from "./Slide";
import Thumbnail from "./Thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const images = [
    { src: '../../public/image/img1.png', heading: 'Slider 01', description: 'Design and more.' },
    { src: '../../public/image/img2.jpg', heading: 'Slider 02', description: 'Lorem ipsum text.' },
    { src: '../../public/image/img3.jpg', heading: 'Slider 03', description: 'Voluptatibus sunt.' },
    { src: '../../public/image/img4.jpg', heading: 'Slider 04', description: 'Creative designs.' },
    { src: '../../public/image/img5.jpg', heading: 'Slider 05', description: 'Innovative ideas.' }
  ];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="slider">
        <div className="list">
          {images.map((image, index) => (
            <Slide key={index} image={image} active={index === currentSlide} />
          ))}
        </div>

        <div className="arrows">
          <button onClick={prevSlide} id="prev" className="button-prev btn">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={nextSlide} id="next" className="button-next btn">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="thumbnail">
        {images.map((image, index) => (   
          <Thumbnail
            key={index}
            image={image}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;

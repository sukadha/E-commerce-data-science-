import React, { useState } from "react";
import "./lists.css";

// Import images
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";
import image7 from "./7.png";
import image8 from "./8.png";
import image9 from "./9.png";
import image10 from "./10.png";
import image11 from "./11.png";
import image12 from "./12.png";
import image13 from "./13.png";
import image14 from "./14.png";
import image15 from "./15.png";
import image16 from "./16.png";
import image17 from "./17.png";
import image18 from "./18.png";
import image19 from "./19.png";
import image20 from "./20.png";
import image21 from "./21.png";
import image22 from "./22.png";
import image23 from "./23.png";
import image24 from "./24.png";
import image25 from "./25.png";
import image26 from "./26.png";
import image27 from "./27.png";
import image28 from "./28.png";
import image29 from "./29.png";
import image30 from "./30.png";
import image31 from "./31.png";
import image32 from "./32.png";
import image33 from "./33.png";
import image34 from "./34.png";
import image35 from "./35.png";
import image36 from "./36.png";
import image37 from "./37.png";
import image38 from "./38.png";
import image39 from "./39.png";
import image40 from "./40.png";

const Lists = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, 
    image8, image9, image10, image11, image12, image13, 
    image14, image15, image16, image17, image18, image19, 
    image20, image21, image22, image23, image24, image25,
    image26, image27, image28, image29, image30, image31, 
    image32, image33, image34, image35, image36, image37,
    image38, image39, image40
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(7);
  const [currentIndex3, setCurrentIndex3] = useState(14);
  const [currentIndex4, setCurrentIndex4] = useState(25); // Starting index for "Master Fundamental Math Skills" images (26.png - 40.png)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex === 7 ? 7 : prevIndex - 1
    );
  };

  const handleNext2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex + 3 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev3 = () => {
    setCurrentIndex3((prevIndex) =>
      prevIndex === 14 ? 14 : prevIndex - 1
    );
  };

  const handleNext3 = () => {
    setCurrentIndex3((prevIndex) =>
      prevIndex + 3 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev4 = () => {
    setCurrentIndex4((prevIndex) =>
      prevIndex === 25 ? 25 : prevIndex - 1
    );
  };

  const handleNext4 = () => {
    setCurrentIndex4((prevIndex) =>
      prevIndex + 3 < images.length ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="container">
      <div className="courses-title-box">
        <div className="title">Courses</div>
      </div>
      <div className="subtitle">Most Popular Course</div>
      <div className="description">
        Our course list is arranged with those skills which are currently in
        most demand in the country and outside the country.
      </div>
      <div className="carousel">
        <button className="nav-button" onClick={handlePrev}>
          &lt;
        </button>
        <div className="image-container">
          {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
            <div className="image-box" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext}>
          &gt;
        </button>
      </div>

      {/* Becoming a Data Scientist Section */}
      <div className="becoming-title-box">
        <div className="title">Becoming a Data Scientist</div>
      </div>
      <div className="carousel">
        <button className="nav-button" onClick={handlePrev2}>
          &lt;
        </button>
        <div className="image-container">
          {images.slice(currentIndex2, currentIndex2 + 3).map((img, index) => (
            <div className="image-box" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext2}>
          &gt;
        </button>
      </div>

      {/* Top Rated Courses Section */}
      <div className="top-rated-title-box">
        <div className="title">Top Rated Courses</div>
      </div>
      <div className="carousel">
        <button className="nav-button" onClick={handlePrev3}>
          &lt;
        </button>
        <div className="image-container">
          {images.slice(currentIndex3, currentIndex3 + 3).map((img, index) => (
            <div className="image-box" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext3}>
          &gt;
        </button>
      </div>

      {/* Master Fundamental Math Skills and Statistics for Data Science Section */}
      <div className="math-title-box">
        <div className="title">Master Fundamental Math Skills and Statistics for Data Science</div>
      </div>
      <div className="carousel">
        <button className="nav-button" onClick={handlePrev4}>
          &lt;
        </button>
        <div className="image-container">
          {images.slice(currentIndex4, currentIndex4 + 3).map((img, index) => (
            <div className="image-box" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext4}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Lists;

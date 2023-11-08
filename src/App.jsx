import React, { useState } from "react";
import "./App.css";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2/Slide2";
import Slide3 from "./components/Slide3/Slide3";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "left" && currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else if (direction === "right" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div
      className="slider"
      onTouchStart={(e) => {
        const startX = e.touches[0].clientX;

        const handleTouchMove = (e) => {
          const currentX = e.touches[0].clientX;
          const deltaX = startX - currentX;
          console.log(startX, currentX);

          if (deltaX > 200) {
            handleSwipe("left");
          } else if (deltaX < -200) {
            handleSwipe("right");
          }
        };

        const handleTouchEnd = () => {
          document.removeEventListener("touchmove", handleTouchMove);
        };

        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
      }}
      style={{
        left: `calc(-${currentSlide * 100}%)`,
      }}
    >
      <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
        <Slide1 setCurrentSlide={setCurrentSlide}></Slide1>
      </div>
      <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
        <Slide2 setCurrentSlide={setCurrentSlide}></Slide2>
      </div>
      <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
        <Slide3 setCurrentSlide={setCurrentSlide}></Slide3>
      </div>
    </div>
  );
}
export default App;

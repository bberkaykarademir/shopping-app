import React, { useState, useEffect } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="slider">
      {currentSlide === 1 && (
        <div
          className="slide"
          style={{ backgroundImage: "url('/shoes.jpg')" }}
        />
      )}
      {currentSlide === 2 && (
        <div className="slide" style={{ backgroundImage: "url('pant.jpg')" }} />
      )}
      {currentSlide === 3 && (
        <div
          className="slide"
          style={{ backgroundImage: "url('tshirt.jpg')" }}
        />
      )}
    </div>
  );
}

export default Slider;

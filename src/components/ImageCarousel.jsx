import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[90%] mx-auto mt-8 flex items-center">
      {/* Previous Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 p-2 bg-gray-800 text-white rounded-full"
      >
        &#8249;
      </button>

      {/* Image */}
      <div className="flex justify-center items-center w-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[300px] h-[300px] object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Next Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 p-2 bg-gray-800 text-white rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageCarousel;

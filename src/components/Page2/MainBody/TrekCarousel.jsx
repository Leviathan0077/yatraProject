import React, { useState, useEffect } from 'react';
import { CaretRight, CaretLeft } from '@phosphor-icons/react';
import img1 from './../../../assets/images/camp.jpeg'; 
import img2 from './../../../assets/images/Frienshippeak.jpeg';
import img3 from './../../../assets/images/sheep.jpeg';

const trekData = [
  {
    id: 1,
    name: "Kedarkantha Trek",
    price: 7500,
    originalPrice: 8500,
    location: "Uttrakhand",
    duration: "5 Days",
    image: img1
  },
  {
    id: 2,
    name: "Beaskund Trek",
    price: 8000,
    originalPrice: 9000,
    location: "Himachal Pradesh",
    duration: "6 Days",
    image: img2
  },
  {
    id: 3,
    name: "Kashmir Trek",
    price: 9000,
    originalPrice: 10000,
    location: "Jammu and Kashmir",
    duration: "7 Days",
    image: img3
  },
  // Add more trek data here...
];

const TrekCard = ({ trek, isActive }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] mx-2 mb-4 transition-transform duration-500 ${isActive ? 'scale-105 z-10' : 'scale-95 z-0'}`}>
    <img src={trek.image} alt={trek.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{trek.name}</h3>
      <div className="flex items-center mb-2">
        <span className="text-orange-500 font-bold text-lg">Rs. {trek.price}/-</span>
        <span className="text-gray-500 line-through ml-2">Rs. {trek.originalPrice}/-</span>
      </div>
      <button className="bg-blue-700 text-white py-2 px-4 rounded-md w-full mb-2">
        View More
      </button>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{trek.location}</span>
        <span>{trek.duration}</span>
      </div>
    </div>
  </div>
);

const TrekCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trekData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trekData.length) % trekData.length);
  };

  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 30000); // Change slide every 30 seconds
      return () => clearInterval(interval);
    }
  }, [isAutoplay]);

  const handleInteraction = () => {
    setIsAutoplay(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Other Related Treks</h2>
      <div className="relative" onMouseEnter={handleInteraction} onMouseLeave={() => setIsAutoplay(true)}>
        <div className="flex flex-wrap md:flex-nowrap overflow-hidden -mx-2">
          {[...Array(visibleCards)].map((_, i) => {
            const trekIndex = (currentIndex + i) % trekData.length;
            return <TrekCard key={trekIndex} trek={trekData[trekIndex]} isActive={i === 1} />;
          })}
        </div>

        {visibleCards > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <CaretLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <CaretRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TrekCarousel;

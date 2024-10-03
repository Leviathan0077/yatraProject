import { useEffect, useState } from "react";
import { sliderDestinations } from "../../data/SliderDestination";
import BannerCard from "./Cards/BannerCard";
import { PlayCircle } from "@phosphor-icons/react";

const Banner = () => {
  const [cardOrder, setCardOrder] = useState([0, 1, 2]); // Show three cards
  const [bgImage, setBgImage] = useState(sliderDestinations[0].background); // Initial background image

  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder((prevOrder) => {
        const nextOrder = [...prevOrder];
        const firstCard = nextOrder.shift(); // Remove the first card
        nextOrder.push(firstCard); // Add it to the end

        // Update the background image based on the current card
        setBgImage(sliderDestinations[nextOrder[0]].background);
        return nextOrder;
      });
    }, 7000); // Change every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat md:px-20 px-5 py-20 flex items-center justify-center gap-10 overflow-hidden h-[60vh] md:h-[80vh]"
      style={{ backgroundImage: `url(${bgImage})` }} // Dynamically set the background
    >
      <div className="mb-20 md:mb-0">
        <h2 className="text-white text-6xl font-[Bodoni] mb-4">
          <p>Discover Your</p>
          <p className="text-7xl font-semibold">New Adventure</p>
        </h2>
        <div className="flex gap-4">
          <button className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md font-semibold transition-all duration-300">
            Explore Now
          </button>
          <button className="text-white px-4 hover:bg-white/20 py-2 rounded-md font-semibold transition-all duration-300 border-[1px] border-white flex items-center gap-2">
            Watch Video <PlayCircle size={24} weight="bold" />
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full h-[350px] flex justify-center items-center">
        <div className="relative">
          {cardOrder.map((index, position) => (
            <div
              key={index}
              className="absolute top-1/2 transition-all duration-300 ease-in-out"
              style={{
                zIndex: 3 - position,
                left: `${position * 80}px`,
                transform: `translate(-50%, -50%) scale(${1 - position * 0.2})`,
                opacity: 1 - position * 0.2,
              }}
            >
              <div className="transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:scale-100 hover:opacity-100">
                <BannerCard item={sliderDestinations[index]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

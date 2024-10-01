import React from 'react';
// Importing images from your local folder
import leftImage from '../../../assets/images/lake.jpeg';
import topRightImage from '../../../assets/images/lake.jpeg';
import bottomLeftImage from '../../../assets/images/lake.jpeg';
import bottomRightImage from '../../../assets/images/lake.jpeg';

const FirstGrid = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[532px] w-full">
      {/* Left Container with Background Image */}
      <div
        className="w-full md:w-1/2 h-[300px] md:h-full bg-cover bg-center mb-5 md:mb-0 md:mr-5"
        style={{ backgroundImage: `url(${leftImage})` }}
      ></div>

      {/* Right Container */}
      <div className="w-full md:w-1/2 flex flex-col h-auto md:h-full">
        {/* Top Container (Inside Right) with Background Image */}
        <div
          className="h-[200px] md:h-[400px] bg-cover bg-center mb-5"
          style={{ backgroundImage: `url(${topRightImage})` }}
        ></div>

        {/* Bottom Container (Inside Right) */}
        <div className="h-[200px] md:h-1/3 flex">
          {/* Left of Bottom Container with Background Image */}
          <div
            className="w-1/2 h-full bg-cover bg-center mr-5"
            style={{ backgroundImage: `url(${bottomLeftImage})` }}
          ></div>

          {/* Right of Bottom Container with Background Image */}
          <div
            className="w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bottomRightImage})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FirstGrid;

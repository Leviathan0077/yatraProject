import React from 'react';
import img1 from './../../../assets/images/beaskund.jpeg';
import img2 from './../../../assets/images/camp.jpeg';
import img3 from './../../../assets/images/mountainforest.jpeg';
import img4 from './../../../assets/images/Peak.jpeg';
import img5 from './../../../assets/images/sheep.jpeg';
import img6 from './../../../assets/images/market.jpeg';
import img7 from './../../../assets/images/lake.jpeg';
import img8 from './../../../assets/images/Frienshippeak.jpeg';

const Album = () => {
  // Array of image imports
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="flex flex-col items-end p-16">
      {/* Heading aligned to the right */}
      <h2 className="text-3xl font-bold mb-4 ml-32 self-start">Photo Gallery</h2>
      
      {/* Photo rows */}
      <div className="w-full flex flex-col">
        <div className="flex flex-wrap justify-between w-a/3 mb-4 mr-32 ml-32">
          {images.slice(0, 4).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-1/4 p-3 object-cover"
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-between mr-32 ml-32">
          {images.slice(4, 8).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 5}`}
              className="w-1/4 p-3 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;

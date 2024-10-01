import React from 'react';
import { Tag, Clock, TrendUp, RoadHorizon, Car } from '@phosphor-icons/react';

const TrekInfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <div className="bg-blue-950 p-2 rounded-lg">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <span className="text-gray-600">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

const Midcomponent = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="px-8 md:px-20 py-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Bunbuni Pass Trek From Delhi
        </h2>

        {/* Responsive grid layout for the trek info items */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <TrekInfoItem
            icon={Tag}
            label="From"
            value={
              <>
                <span className="line-through text-gray-400 mr-1">₹7,000</span>₹5,700
              </>
            }
          />
          <TrekInfoItem icon={Clock} label="Duration" value="4D/3N" />
          <TrekInfoItem icon={TrendUp} label="Height" value="9,700ft" />
          <TrekInfoItem icon={RoadHorizon} label="Distance" value="15kms" />
          <TrekInfoItem icon={Car} label="Pick Up & Drop" value="Delhi" />
        </div>
      </div>
    </div>
  );
};

export default Midcomponent;

import React, { useState } from 'react';

const trekData = [
  {
    day: 1,
    title: "Explore Kasol and Visit Manikaran",
    description:
      "In an air-conditioned vehicle, we leave Delhi at around ten o'clock at night. (Recognise the genuine worth of time, don't waste it, and make the most of each and every minute of it.) A pit stop for dinner at any nice restaurant by the side of the road. On the road to Kasol, the Delhi Manali Highway is a great place to snap photographs and enjoy scenery. We will reach Kasol early morning, you can rest in your stays and freshup for today's adventure."
  },
  {
    day: 2,
    title: "Trek to Base Camp",
    description: "Start your trek to the base camp, enjoying beautiful mountain views along the way."
  },
  {
    day: 3,
    title: "Summit Day",
    description: "Early morning start for the summit push. Reach Bunbuni Pass and enjoy panoramic views."
  },
  {
    day: 4,
    title: "Return Journey",
    description: "Trek back to the starting point and prepare for your return journey."
  }
];

export default function TrekData() {
  const [activeDay, setActiveDay] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDayClick = (day) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDay(day);
      setIsAnimating(false);
    }, 300);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 pb-0 font-sans mt-20">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Trek Overview */}
        <div className="flex-grow md:w-2/3 mt-10 mr-10">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-6">
            The Bunbuni Pass trek is a challenging and rewarding trekking expedition in the Parvati Valley region of Himachal Pradesh, India. Situated at an altitude of approximately 4,200 meters (13,780 feet), Bunbuni Pass offers breathtaking panoramic views of snow-capped peaks, lush valleys, and pristine alpine meadows.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Trek Plan</h2>
          {/* Day Buttons */}
          <div className="flex flex-wrap space-x-2 mb-4">
            {trekData.map((day) => (
              <button
                key={day.day}
                aria-label={`Day ${day.day}`}
                className={`px-4 py-2 rounded mb-2 ${
                  activeDay === day.day
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => handleDayClick(day.day)}
              >
                Day {day.day}
              </button>
            ))}
          </div>

          {/* Active Day Description */}
          <div
            className={`bg-gray-100 p-4 rounded-lg transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{trekData[activeDay - 1].title}</h3>
            <p>{trekData[activeDay - 1].description}</p>
          </div>
        </div>

        {/* Pricing and Booking Form */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <p className="text-sm text-gray-600 mb-2">GST 5% Extra</p>
            <p className="text-3xl font-bold mb-4">
              {formatPrice(5700)}{' '}
              <span className="text-lg line-through text-gray-500">
                {formatPrice(7000)}
              </span>
            </p>

            {/* Number of People Input */}
            <div className="flex items-center space-x-2 mb-4">
              <label htmlFor="people-count" className="sr-only">Number of People</label>
              <input
                id="people-count"
                type="number"
                defaultValue={1}
                min={1}
                className="p-2 border rounded w-full"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                Book Now
              </button>
            </div>

            {/* Group Booking Form */}
            <h3 className="text-xl font-semibold mb-4">For Group Booking</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input type="email" placeholder="Email" className="flex-grow w-full p-2 border rounded" />
                <input type="tel" placeholder="Phone No." className="flex-grow w-full p-2 border rounded" />
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="number"
                  placeholder="No. of People"
                  className="flex-grow w-full p-2 border rounded"
                />
                <input type="date" className="flex-grow p-2 border rounded w-full" />
              </div>
              <select className="w-full p-2 border rounded">
                <option>Kedarkantha Trek</option>
                {/* Add more options as needed */}
              </select>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

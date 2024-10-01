import React from 'react';

const ListSection = ({ title, items, isIncluded = true }) => (
  <div className="flex-1 mb-6 md:mb-0">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span
            className={`${isIncluded ? 'text-green-500' : 'text-red-500'} mr-2`}
            aria-label={isIncluded ? 'Included' : 'Excluded'}
          >
            {isIncluded ? '✓' : '✗'}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const GearCategory = ({ title, items }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-6">
    <h3 className="text-xl font-[outfit] text-orange-500 mb-3">{title}</h3>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TripPlan = () => {
  const includedItems = [
    "Pick and Drop Transfers from/to Delhi",
    "All meals are included with proper hygiene parameters",
    "Triple/double sharing tent accommodations are available",
    "During the trek, there will be morning and evening tea with a small refreshment",
    "All tolls and forest fees",
    "Trekking gears (tents, sleeping bags, ropes, gaiters, crampons etc.)",
    "First Aid Medical Kit",
    "Expert Guide",
  ];

  const excludedItems = [
    "Food during pick and drop transfers",
    "Porters/mules charges",
    "Personal expenses",
    "Insurance",
    "Anything apart from the inclusions",
    "GST 5%",
  ];

  const gearCategories = [
    {
      title: "1. Trekking Gear",
      items: [
        "Rucksack with rain cover",
        "Day pack bag, Recommended for treks with a summit day",
        "Head torch with spare batteries",
        "UV protection sunglasses",
        "Water bottles: Two 1-liter bottles",
      ],
    },
    {
      title: "2. Footwear",
      items: [
        "Non-skid, deep treaded, high-ankle trekking shoes: 1 pair",
        "Lightweight slippers or sandals: 1 pair",
      ],
    },
    {
      title: "3. Clothing",
      items: [
        "Quick-dry warm lower or track pants: 2",
        "Full-sleeve T-shirts/sweatshirts: 1 for every 2 days of trekking",
        "Thick woolen socks: 1 pair for every 2 days of trekking",
        "Thermal body warmer (upper & lower): 1 set",
        "Undergarments: 1 for each day of trekking",
        "Warm jacket (closed at wrist & neck): 1",
        "Full-sleeve sweater: 1",
      ],
    },
    {
      title: "4. Toiletries",
      items: [
        "Personal toiletries kit: Small towel, toilet paper, paper soap, bar soap, toothbrush, toothpaste, cold cream, etc.",
        "Sunscreen lotion: Small pack",
        "Lip balm: Small pack",
      ],
    },
    {
      title: "5. Utensils",
      items: [
        "Small, lightweight, leak-proof lunch box: 1",
        "Plate: 1",
        "Spoon: 1",
        "Tea/coffee mug (plastic): 1",
      ],
    },
    {
      title: "6. Miscellaneous",
      items: [
        "Camera: (Optional)",
        "Personal medicines: Bring plenty if needed; consult your doctor before the trek.",
        "Dry fruits, nuts, chocolate bars (Optional)",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 pt-0 font-sans">
      <h2 className="text-3xl font-bold mb-6"></h2>

      <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
        <ListSection title="What's Included" items={includedItems} />
        <ListSection title="What's Excluded" items={excludedItems} isIncluded={false} />
      </div>

      <h2 className="text-3xl font-bold mb-6">Things To Carry</h2>
      <p className="mb-4">
        When embarking on a trek with Global Events Travels, there are certain items you need to bring yourself. These are divided into five categories: Trekking Gear, Footwear, Clothing, Toiletries, Utensils, and Miscellaneous. All items listed are essential, unless marked as optional.
      </p>

      <div className="flex flex-wrap gap-4">
        {gearCategories.map((category, index) => (
          <GearCategory key={index} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
};

export default TripPlan;

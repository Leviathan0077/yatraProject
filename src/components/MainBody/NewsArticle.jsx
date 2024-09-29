import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';



const ArticleCard = ({ image, title, subtitle }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
    <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
    </div>
  </div>
);

const NewsArticles = () => {
  const articles = [
    {
      image: "https://global.techpath.pro/wp-content/uploads/2024/04/Top-5-1-min.png",
      title: "Ultimate Fitness Guide For Trekkers",
      subtitle: "From beginner trails to experienced"
    },
    {
      image: "https://global.techpath.pro/wp-content/uploads/2024/04/Top-5-2-min.png",
      title: "Essential Tips for High BMI Explorers!",
      subtitle: "Making trekking accessible for everyone"
    },
    {
      image: "https://global.techpath.pro/wp-content/uploads/2024/04/Top-5-min.png",
      title: "Top 5 Summer Treks of India",
      subtitle: "Discover breathtaking landscapes"
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">News & Articles</h2>
          <a href="#" className="flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300">
            View all tours
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
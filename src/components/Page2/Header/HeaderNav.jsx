import { useState } from 'react';
import mainlogo from "../../assets/images/logo.png";

const navLinks = [
  { name: "Home", link: "#" },
  { name: "About Us", link: "#" },
  { name: "Trek", link: "#" },
  { name: "Yatra", link: "#" },
  { name: "Tour", link: "#" },
  { name: "Article", link: "#" }
];

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex sticky top-0 z-50 justify-between items-center px-6 md:px-24 py-4 bg-white/10 backdrop-blur-[5px]">
        {/* Logo */}
        <div>
          <img
            src={mainlogo}
            alt="mainlogo"
            className="w-12 h-12 md:w-64 md:h-auto object-cover object-left md:object-center"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              className="text-gray-700 hover:text-yellow-500 transition-all duration-300 font-semibold"
              href={link.link}
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 items-center">
          <button className="text-gray-700 transition-all duration-300 font-semibold bg-white md:px-8 md:py-2 px-4 py-1 rounded-md hover:bg-gray-100 border-[1px] border-gray-400">
            Login
          </button>
          <button className="transition-all duration-300 font-semibold bg-orange-400 md:px-8 md:py-2 px-4 py-1 rounded-md hover:bg-orange-500 text-white">
            Call Now
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white/90 backdrop-blur-[5px]">
          {navLinks.map((link) => (
            <a
              className="text-gray-700 hover:text-yellow-500 transition-all duration-300 font-semibold"
              href={link.link}
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default HeaderNav;

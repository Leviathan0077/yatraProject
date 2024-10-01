import mainlogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "Trek",
    link: "#",
  },
  {
    name: "Yatra",
    link: "/page2",
  },
  {
    name: "Tour",
    link: "#",
  },
  {
    name: "Article",
    link: "#",
  },
];

const HeaderNav = () => {
  return (
    <>
      {" "}
      <div className="flex sticky top-0 z-50 justify-between items-center px-4 sm:px-10 md:px-24 py-4 bg-white/10 backdrop-blur-[5px]">
        <div>
          <img
            src={mainlogo}
            alt="mainlogo"
            className="w-16 h-16 object-left md:object-center object-cover md:object-contain md:h-auto md:w-64"
          />
        </div>
        <div className="hidden lg:flex justify-around flex-1 items-center">
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
        <div className="flex gap-4 items-center">
          <button className="text-gray-700 transition-all duration-300 font-semibold bg-white px-4 py-2 rounded-md hover:bg-gray-100 border-[1px] border-gray-400">
            Login
          </button>
          <button className="transition-all duration-300 font-semibold bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-500 text-white">
            Call Now
          </button>
        </div>
      </div>
      <div className="lg:hidden flex justify-around flex-1 items-center">
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
    </>
  );
};

export default HeaderNav;

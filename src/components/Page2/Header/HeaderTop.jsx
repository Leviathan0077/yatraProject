import { Building, ShoppingCart } from "@phosphor-icons/react";

const HeaderTop = () => {
  return (
    <div className="flex justify-between items-center px-4 md:px-24 py-4 bg-yellow-400">
      {/* Email */}
      <div className="font-medium hover:text-gray-950 text-white transition-all duration-300 text-sm md:text-base">
        <a href="#">info@globaleventstravels.com</a>
      </div>

      {/* Cart and Step inn Kasol */}
      <div className="flex gap-4 md:gap-8 items-center text-white text-xs md:text-sm">
        <button className="hover:text-gray-950 transition-all duration-300 flex items-center gap-2">
          <ShoppingCart size={16} weight="bold" />
          Cart
        </button>
        <button className="hover:text-gray-950 transition-all duration-300 flex items-center gap-2">
          <Building size={16} weight="bold" />
          Step inn Kasol
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;

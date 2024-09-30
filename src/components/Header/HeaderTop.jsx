import { Building, ShoppingCart } from "@phosphor-icons/react";

const HeaderTop = () => {
    return (
        <div className="flex justify-between items-center px-4 sm:px-10 md:px-24 py-4 bg-yellow-400">
            <div className="font-medium hover:text-gray-950 text-white transition-all duration-300">
                <a href="#">info@globaleventstravels.com</a>
            </div>
            <div className="flex gap-4 sm:gap-8 items-center text-white text-sm">
                <button className="hover:text-gray-950 transition-all duration-300 flex items-center gap-2">
                    <ShoppingCart size={16} weight="bold"/>
                    <span className="hidden sm:inline">Cart</span>
                </button>
                <button className="hover:text-gray-950 transition-all duration-300 flex items-center gap-2">
                    <Building size={16} weight="bold" />
                    <span className="hidden sm:inline">Step inn Kasol</span>
                </button>
            </div>
        </div>
    );
}

export default HeaderTop;

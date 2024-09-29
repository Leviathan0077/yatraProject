import { Building, ShoppingCart } from "@phosphor-icons/react"

const HeaderTop = () => {
    return (
        <div className="flex justify-between items-center px-24 py-4 bg-yellow-400">
            <div className="font-medium hover:text-gray-950 text-white transition-all duration-300">
                <a href="#">info@globaleventstravels.com</a>
            </div>
            <div className="flex gap-8 items-center text-white text-sm">
                <button className="hover:text-gray-950 transition-all duration-300 flex items-center gap-2">
                    <ShoppingCart size={16} weight="bold"/>
                    Cart
                </button>
                <button className="hover:text-gray-950 transition-all duration-300 flex items-center gap-2">
                    <Building size={16} weight="bold" />
                    Step inn Kasol
                </button>
            </div>
        </div>
    )
}

export default HeaderTop
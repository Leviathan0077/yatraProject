import { formatPrice } from "../../../utils/helpers";
import { MapPin, ClockClockwise } from "@phosphor-icons/react"
const BannerCard = ({ item }) => {
    return (
        <div className="bg-white rounded-md shadow-md p-3 w-[300px] h-[450px] flex flex-col">
            <div className="w-full aspect-square overflow-hidden mb-2" style={
                {
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "20px"
                }
            }>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-4xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-xs">Just <span className="text-orange-400 font-semibold text-xl">Rs. {formatPrice(item.price.discounted_price)}/-</span> <span className="text-gray-300 line-through">Rs. {formatPrice(item.price.actual_price)}/-</span></p>
            <div className="flex justify-between items-end text-gray-500 mt-2 flex-grow text-xs">
                <p className="flex items-center gap-1"><MapPin size={16} weight="fill" color="#fb923c" />{item.location}</p>
                <p className="flex items-center gap-1"><ClockClockwise size={16} weight="bold" color="#fb923c" />{item.duration}</p>
            </div>
        </div>
    )
}

export default BannerCard;
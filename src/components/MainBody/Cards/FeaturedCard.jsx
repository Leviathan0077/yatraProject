import { formatPrice } from "../../../utils/helpers";
import { MapPin, ClockClockwise } from "@phosphor-icons/react"
const FeaturedCard = ({ key, item, fromUpcoming }) => {
    return (
        <div 
        key={key}
        className={`rounded-md overflow-hidden flex flex-col bg-white pb-2 ${fromUpcoming ? 'max-w-[350px] w-full h-[400px]' : 'min-w-[300px] min-h-[490px] mr-16'}`}>
            <div className={`w-full ${fromUpcoming ? 'aspect-video' : 'aspect-square'}`}>
                <img src={item?.image} alt="image" className="object-cover w-full h-full" />
            </div>
            <div className="flex justify-between items-end text-gray-500 mt-2 px-2 text-xs">
                <p className="flex items-center gap-1">
                    <MapPin size={16} weight="fill" color="#fb923c" />
                    {item.state}
                </p>
                <p className="flex items-center gap-1">
                    <ClockClockwise size={16} weight="bold" color="#fb923c" />
                    {item.duration} Days
                </p>
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 px-2">{item.title}</h3>
            <div className="px-2 flex-grow flex items-start flex-col justify-end mt-2">
                <p className="text-xs">from <span className="text-orange-400 font-semibold text-xl">₹{formatPrice(item?.price_range?.low)}-₹{formatPrice(item?.price_range?.high)}</span></p>
                <button className="px-5 py-2 flex justify-center items-center bg-blue-900 hover:bg-blue-950 text-white rounded-md mt-1">Book Now</button>
            </div>
        </div>
    )
}

export default FeaturedCard;
import { featuredDestinations } from "../../data/FeaturedDestinations"
import FeaturedCard from "./Cards/FeaturedCard"

const Featured = () => {
    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-[46px] leading-[54px] outfit-regular">Featured Destinations</h2>
                <p className="text-gray-500 tracking-[5px]">Check out our best promotion tours!</p>
            </div>
            <div className="overflow-x-scroll pb-8 relative custom-scroll">
                <div className="flex items-center">
                    <div className="min-w-40 h-full left-0"></div>
                    {featuredDestinations?.map((item, index) => <FeaturedCard item={item} key={index} />)}
                    <div className="min-w-40 h-full right-0 text-white">x</div>
                </div>
            </div>
            <div className="flex justify-center items-center py-12 ml-20 my-16 pr-20 bg-blue-950 flex-col gap-8 relative">
                    <div className="absolute bg-gray-100 w-16 h-1/2 left-0 top-0" style={
                        {
                            borderTopRightRadius : '9999px',
                            borderBottomRightRadius : '9999px'
                        }
                    }></div>
                    <div className="absolute bg-blue-950 w-16 h-1/2 -left-16 bottom-0" style={
                        {
                            borderTopLeftRadius : '9999px',
                        }
                    }></div>
                    <h3 className="lg:text-5xl md:text-3xl text-2xl md:max-w-none max-w-80 tracking-wide text-gray-300 great-vibes-regular">Secure Your Dream Vacation Today!</h3>
                    <button className="px-5 py-2 font-semibold hover:bg-white bg-gray-300 rounded-md">Book Now!</button>
            </div>
        </div>
    )
}

export default Featured;
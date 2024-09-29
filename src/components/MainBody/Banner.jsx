import { useState } from 'react'
import bgImage from "../../assets/images/lake.jpeg"
import { sliderDestinations } from "../../data/SliderDestination"
import BannerCard from "./Cards/BannerCard"
import { PlayCircle } from "@phosphor-icons/react"

const Banner = () => {
    const [cardOrder, setCardOrder] = useState([0, 1, 2])

    const handleCardClick = (index) => {
        setCardOrder(prev => {
            const newOrder = prev.filter(i => i !== index)
            return [index, ...newOrder]
        })
    }

    return (
        <div className="bg-cover bg-center bg-no-repeat px-20 py-32 flex items-center justify-center gap-10" style={{ backgroundImage: `url(${bgImage})` }}>
            <div>
                <h2 className="text-white text-6xl font-[Bodoni] mb-4">
                    <p>Discover Your</p>
                    <p className="text-7xl font-semibold">New Adventure</p>
                </h2>
                <div className="flex gap-4">
                    <button className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md font-semibold transition-all duration-300">Explore Now</button>
                    <button className="text-white px-4 hover:bg-white/20 py-2 rounded-md font-semibold transition-all duration-300 border-[1px] border-white flex items-center gap-2">Watch Video <PlayCircle size={24} weight="bold" /></button>
                </div>
            </div>
            <div className="w-1/2 h-[350px] flex justify-center items-center">
                <div className="relative">
                    {cardOrder.map((index, position) => (
                        <div
                        key={index}
                        className="absolute top-1/2 transition-all duration-300 ease-in-out cursor-pointer hover:z-10"
                        style={{
                            zIndex: 3 - position,
                            left: `${position * 80}px`,
                            transform: `translate(-50%, -50%) scale(${1 - position * 0.2})`,
                            opacity: 1 - position * 0.2,
                        }}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:scale-100 hover:opacity-100">
                            <BannerCard item={sliderDestinations[index]} />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Banner
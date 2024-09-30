import { upcomingYatra } from "../../data/UpcomingYatra";
import FeaturedCard from "./Cards/FeaturedCard";

const Upcoming = () => {
    return (
        <div>
            <h1 className="text-3xl font-[Bodoni] text-center mb-10 font-medium">Upcoming yatra/Expeditions</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 lg:px-40 md:px-20 px-10">
                {
                   upcomingYatra?.map((item, index) => (
                    <div className="w-full h-full flex justify-center items-center">
                    <FeaturedCard item={item} key={index} fromUpcoming={true}/>
                    </div>
                   ))
                }
            </div>
        </div>
    )
}

export default Upcoming;
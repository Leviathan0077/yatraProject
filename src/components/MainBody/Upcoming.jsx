import { upcomingYatra } from "../../data/UpcomingYatra";
import FeaturedCard from "./Cards/FeaturedCard";

const Upcoming = () => {
    return (
        <div>
            <h1 className="text-3xl font-[Bodoni] text-center mb-10 font-medium">Upcoming yatra/Expeditions</h1>
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 items-center justify-center px-40">
                {
                   upcomingYatra?.map((item, index) => (
                    <FeaturedCard item={item} key={index} fromUpcoming={true}/>
                   ))
                }
            </div>
        </div>
    )
}

export default Upcoming;
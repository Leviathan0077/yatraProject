import Banner from "./Banner"
import Featured from "./Featured"
import Upcoming from "./Upcoming"
import Testimonials from "./Testimonials"
import NewsArticles from "./NewsArticle"
const MainBody = () => {
    return (
        <div>
            <Banner />
            <div className="flex justify-center items-center">
                <h2 className="text-6xl text-gray-800 my-16 leckerli-one-regular">
                    Explore, Enjoy, Experience
                </h2>
            </div>
            <div className="bg-gray-100 py-16">
                <Featured />
                <Upcoming />
                <Testimonials />
                <NewsArticles />
            </div>
        </div>
    )
}

export default MainBody
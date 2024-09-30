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
                <h2 className="md:text-6xl text-4xl text-gray-800 lg:my-16 my-10 leckerli-one-regular">
                    Explore, Enjoy, Experience
                </h2>
            </div>
            <div className="bg-gray-100 lg:py-16 py-0">
                <Featured />
                <Upcoming />
                <Testimonials />
                <NewsArticles />
            </div>
        </div>
    )
}

export default MainBody
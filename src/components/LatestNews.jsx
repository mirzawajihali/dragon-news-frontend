import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const [news, setNews] = useState([]); // ✅ Initialize as an array

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/category/01")
            .then(res => res.json())
            .then(data => {
           
                setNews(data.data || []); // ✅ Ensure it's an array
            })
            .catch(error => console.error("Error fetching news:", error));
    }, []);

    return (
        <div className="text-center flex items-center justify-center space-x-4 mt-4 text-lg bg-gray-200 p-2">
            <span className="bg-[#D72050] px-4 py-2 text-white font-semibold">Latest</span>
            <Marquee pauseOnHover={true} speed={75} className="space-x-10">
                {news.length > 0 ? ( // ✅ Check if news has items
                    news.map((item) => (
                        <Link key={item._id} to={`/news/${item._id}`} className="mx-4 text-black hover:underline">
                            {item.title}
                        </Link>
                    ))
                ) : (
                    <span className="text-gray-500">No news available</span> // ✅ Fallback message
                )}
            </Marquee>
        </div>
    );
};

export default LatestNews;

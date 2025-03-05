import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {

    const {data:news} = useLoaderData();

    return (
        <div>
             <h1 className='font-bold text-xl mb-4'>Dragon News Home </h1>

            <p className="text-gray-500 font-bold">{news.length } News found in this category</p>


            <div>
                {
                    news.map((news, index) => <NewsCard key={index} news={news} />
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;
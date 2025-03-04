import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {

    const {data:news} = useLoaderData();

    return (
        <div>
             <h1 className='font-bold text-xl mb-4'>Dragon News Home </h1>

            <p className="text-gray-500 font-bold">{news.length } News found in this category</p>


            <div>
                {
                    news.map((n, index) => (
                        <div key={index} className="my-4 p-4 border border-gray-200 rounded-md">
                            <h1 className="text-xl font-bold">{n.title}</h1>
                            <p className="text-gray-500">{n.summary}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;
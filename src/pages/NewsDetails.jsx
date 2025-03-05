import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/RightNavbar";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];

    const {image_url, details, title} = news;

    return (
        <div>

            <Header></Header>
            <main className="w-11/12 mx-auto pt-5 gap-5 grid md:grid-cols-12 text-center ">
                <section className="col-span-9">
                    <h1 className='font-bold text-xl mb-4'>Dragon News </h1>

                    <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src={image_url}
                                alt={title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p className="text-start">{details}</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary"><Link to={`/category/${news?.category_id}`}>Back to Category</Link></button>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="col-span-3">
                    <RightNavbar></RightNavbar>
                </section>

            </main>
        </div>
    );
};

export default NewsDetails;
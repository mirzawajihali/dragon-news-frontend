import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="text-center flex items-center justify-center space-x-4 mt-4 text-l  bg-gray-200 p-2">
            <span className="bg-[#D72050] px-4 py-2  text-base-100 font-semibold">Latest</span>
            <Marquee pauseOnHover={true} speed={75} className="space-x-10">
            <Link to="/news" 
            > I can be a React component, multiple React components, or just some text.</Link>
            <Link to="/news" 
            > I can be a React component, multiple React components, or just some text.</Link>
            <Link to="/news" 
            > I can be a React component, multiple React components, or just some text.</Link>

            </Marquee>
        </div>
    );
};

export default LatestNews;
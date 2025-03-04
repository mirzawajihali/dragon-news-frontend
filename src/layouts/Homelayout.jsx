import Header from "../components/Header";
import LatestNews from "./LatestNews";

const Homelayout = () => {
    return (
        <div >
            <Header></Header>
            <section className="w-11/12 mx-auto ">
                <LatestNews></LatestNews>
            </section>
        </div>
    );
};

export default Homelayout;
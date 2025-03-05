import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";
import Footer from "../components/Footer";


const Homelayout = () => {
    return (
        <div className="font-poppins" >
           <header>
           <Header></Header>
            <section className="w-11/12 mx-auto ">
                <LatestNews></LatestNews>
            </section>
           </header>
           <nav>
           <section className="w-11/12 mx-auto ">
              <Navbar></Navbar>
            </section>
           </nav>

           <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 text-center "> 

           <aside className="left col-span-3"><LeftNavbar></LeftNavbar> </aside>
           <section className=" col-span-6"><Outlet></Outlet></section>

           <aside className=" col-span-3"><RightNavbar></RightNavbar> </aside>


           </main>
           <footer>
            <Footer></Footer>
           </footer>

        </div>
    );
};

export default Homelayout;
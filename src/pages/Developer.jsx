import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import developer from "../assets/images/developer.png";

const Developer = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.typing', {
      strings: ['', 'Undergrad BSc Engg. RUET CSE', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
   <div>
    <header>
        <Header></Header>
        <Navbar></Navbar>
    </header>

    <main>
    <div className="w-11/12 mx-auto sm:h-screenh-full bg-white">
      <div
        className=" h-full  flex items-center  w-full bg-[url('https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <div className="w-full h-full relative top-10 pb-20">
          <div className="lg:px-16 px-8 flex sm:flex-row flex-col flex-col-reverse gap-6 justify-center items-center">
            <div className="sm:text-left text-center text-black">
              <h4 className="sm:text-2xl text-3xl font-semibold w-fit bg-gray-900/40 p-3">
                Hello, My name is{' '}
                <span className="text-red-900 sm:text-2xl text-xl font-serif">Mirza Wajih Ali</span>
              </h4>
              <h1 className="mt-4 sm:text-4xl text-black font-bold text-2xl">
                I'm <span className="typing libre-baskerville-bold text-black"></span>
              </h1>

              <p className="mt-4 text-lg font-semibold text-black capitalize">
                Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.
              </p>
              <div className="mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
                <button className="p-2 px-6 text-black font-semibold rounded-full outline outline-2 outline-gray-500 hover:bg-gray-500 transition ease-in-out delay-150">
                  Hire Me
                </button>
                <button className="p-2 text-black px-6 font-semibold rounded-full outline outline-2 outline-gray-500 hover:bg-gray-500 transition ease-in-out delay-150">
                  Download CV
                </button>
              </div>
            </div>

            {/* Image */}
            <img
              className="md:max-w-[30%] sm:max-w-[40%] max-w-[70%] sm:rounded-sm sm:rounded-br-[5rem] sm:rounded-tl-[5rem] rounded-full sm:outline-none outline outline-[.3rem] outline-gray-400/60"
              src={developer}
              alt="My Pic"
            />
          </div>
        </div>
      </div>
    </div>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
   </div>
  );
};

export default Developer;
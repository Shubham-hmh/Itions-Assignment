import React from 'react'
import Navbar from '../components/Navbar'
import img from './imag.png'
import Footer from '../components/Footer'
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3 row-start.png";
import img4 from "./Image.png";
import img5 from "./last.png";


const HomePage = () => {
    return (
        <div>
            <div className="wrapper h-[500px] bg-[#FFC700]">
                <div className="inner-wrapper">
                    <Navbar />
                </div>
                <div className="title my-12 ml-14 flex items-center">
      <div className="border-l-2 border-black h-28 mr-4"></div>
      <h2 className="text-6xl text-white">PORTFOLIO <br/> GALLERY</h2>
    </div>

            </div>

            <section className="inner-intro my-24">
                <div className="section-intro flex flex-col md:flex-row gap-4 m-4">
                    <div className="left-text flex-1">
                        <img src={img} alt="Team" className="w-full h-full object-cover" />
                    </div>
                    <div className="right-image flex-1 flex flex-col justify-center">
                        <h2 className="text-[#757575] mb-2 ">Team Working</h2>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            LET'S SEE OUR PERFECT <br /> TEAM WORKER
                        </h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="sub-list">
                            <ul className="sub-part flex flex-col gap-2">
                                <li className="list">Flexible Time</li>
                                <li className="list">Perfect Work</li>
                                <li className="list">Client Priority</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio-section  py-8">
                <div className="container mx-auto  m-4">
                    <h3 className="text-2xl font-semibold mb-2 ml-4">Portfolio</h3>
                    <h1 className="text-4xl font-bold mb-8 ml-4">Our Recent Projects</h1>
                    <div className="space-y-4 m-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-64 overflow-hidden">
                                <img src={img1} alt="Project 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-64 overflow-hidden">
                                <img src={img2} alt="Project 2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-64 overflow-hidden">
                                <img src={img3} alt="Project 3" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-64 overflow-hidden">
                                <img src={img3} alt="Project 4" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-64 overflow-hidden">
                                <img src={img3} alt="Project 5" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-64 overflow-hidden">
                                <img src={img4} alt="Project 6" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-64 overflow-hidden">
                                <img src={img3} alt="Project 7" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-64 overflow-hidden">
                                <img src={img5} alt="Project 8" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
                            Load More
                        </button>
                    </div>
                </div>
            </section>


            <section className="relative">
                <div className="bottom-section relative z-10">
                    <div className="inner-bottom h-[400px] bg-yellow-500 m-4">
                        <div className="bg-white h-[100px] mx-20"></div>
                        <h1 className="text-6xl font-extrabold text-white mx-20">
                            LET'S CHANGE YOUR OWN HOME INTERIOR <br />DESIGN NOW
                        </h1>
                        <div className="flex mt-8">
                            <button className="bg-black text-white font-bold py-2 mx-20 px-4 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative -mt-8">
                <Footer />
            </section>
        </div>
    )
}

export default HomePage

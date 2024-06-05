import React from 'react'
import Navbar from '../components/Navbar'
import img from './imag.png'
import Footer from '../components/Footer'
import CardUi from '../components/CardUi'

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3 row-start.png";
import img4 from "./Image.png";
import img5 from "./last.png";


const Blog = () => {
    return (
        <div>
            <div className="wrapper h-[500px] bg-[#FFC700]">
                <div className="inner-wrapper">
                    <Navbar />
                </div>
                <div className="title my-12 ml-14 flex items-center">
      <div className="border-l-2 border-black h-28 mr-4"></div>
      <h2 className="text-6xl text-white">Blogs</h2>
    </div>

            </div>

           
            <section className="portfolio-section  py-8 px-20">
            <div className="grid grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map((index) => (
                        <CardUi key={index}  />
                    ))}
                </div>
             
                    <div className="flex justify-center mt-8">
                        <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
                            Load More
                        </button>
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

export default Blog

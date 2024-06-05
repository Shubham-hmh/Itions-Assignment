import React from 'react'

const Navbar = () => {
    return (
        <div className="container">

            <section className="header">
                <div className="inner flex justify-between items-center">
                    <div className="logo">

                    </div>
                    <div className='menu-list mt-8 '>
                        <nav>
                            <ul className='flex gap-4 items-center'>
                                <li className="list">Home</li>
                                <li className="list">Services</li>
                                <li className="list">Projects</li>
                                <li className="list">About Us</li>
                            </ul>
                        </nav>

                    </div>
                    <div className="button border border-black mt-8 mr-4  rounded-md">
                        <button className=' m-2'>Contact Us</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar
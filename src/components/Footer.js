import React from 'react'

const Footer = () => {
    return (
        <div className="">
         
            <div className="inner-wrapper bg-black">

                <h1 className="text text-7xl font-bold text-white text-center pt-4">
                    We Provide best Services all <br /> over the India
                </h1>

                <div className="flex justify-center">
                    <button className='button border p-2 border-white text-center rounded-md text-white m-2'>
                        Explore our Products
                    </button>
                </div>

                <div className="flex bg-black text-white p-6 ">

                    <div className="w-1/3 p-4 border border-[#665244]">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-bold text-[#D0C2B0] mb-2">Subscribe to reCeive grape news & offers</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 rounded bg-[#523825] text-white border border-gray-600"
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <input type="checkbox" id="subscribe" className="mr-2" />
                            <label htmlFor="subscribe">Subscribe to our newsletter</label>
                        </div>
                        <div className="mb-4">
                            <table className="table-auto w-full border-collapse border border-[#665244] text-[#D0C2B0]">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border border-[#665244]">Facebook</th>
                                        <th className="px-4 py-2 border border-[#665244]">Instagram</th>
                                        <th className="px-4 py-2 border border-[#665244]">Twitter</th>
                                        <th className="px-4 py-2 border border-[#665244]">Yahoo</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="mb-4">
                            <select id="country" className="w-1/4 p-2 rounded bg-black text-white border border-gray-600 border-none">
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                                <option value="uk">UK</option>
                                <option value="australia">Australia</option>
                            </select>
                        </div>


                    </div>


                    <div className="w-2/3 p-4 grid grid-cols-4 gap-4 border border-[#665244]">
                        {['About us', 'Our promise', 'privacy policy', 'My account'].map((column, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-bold mb-2">{column}</h4>
                                <ul>
                                    {['All productr', 'Best sellers', 'New arrivals', 'lowest prices', 'Delivery'].map((item, idx) => (
                                        <li key={idx} className="mb-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                </div>


                <div className="flex  flex-1 justify-between items-center mt-4 pt-4">
                    <div className='w-1/2'>
                        © 2021 ChiranjitH.com. All rights reserved.
                    </div>
                    <div className='w-1/2'>
                        <a href="#" className="mr-4 text-white hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="text-white hover:text-gray-400">Terms of Use</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
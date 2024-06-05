import React from 'react';
import { IoToggle } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <div className="wrapper bg-gray-900 p-4">
                <div className="inner-wrapper flex justify-between items-center">
                    <div className="logo text-white text-2xl font-bold"><img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" className="w-44" alt="" /></div>
                    <div className="select-list flex gap-2">
                        <select className="bg-[#2e3241] text-white p-2 rounded-md" name="" id="">
                            <option value="">INR</option>
                        </select>
                        <select className="bg-[#2e3241] text-white p-2 rounded-md" name="" id="">
                            <option value="">BTC</option>
                        </select>
                        <div className="theme-changer bg-[#2e3241] text-white p-2 rounded-md"><button>BUY BTC</button></div>

                    </div>
                    <div className="reminder-button-theme flex items-center gap-4">
                        <div className="circle-timer bg-black text-white border border-teal-300 p-2 rounded-[50%]"><div className="inner-part  ">28</div></div>
                        <div className="register-button bg-[#3dc6c1] text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600">Contact Telegram</div>
                        <div className="theme-changer text-white p-2"><IoToggle size={40} enableBackground="#2e3241" /></div>
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default Header;

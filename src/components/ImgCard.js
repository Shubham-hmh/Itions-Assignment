import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
                setUserData(response.data.results[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        loadData();
    }, []);

    return (
        // <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        //     {userData && (
        //         <div className="flex justify-items-center items-center">
        //             <div className="w-1/3 ml-1 ">
        //                 <img src={userData.picture.large} alt="User" className="w-16 h-16 rounded-full " />
        //             </div>
        //             <div className="w-2/3 px-4 py-2">
        //                 <h2 className="text-lg font-semibold">{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</h2>
        //                 <p className="text-sm text-gray-600">{userData.gender}</p>
        //                 <p className="text-sm text-gray-600">{userData.email}</p>
        //                 <p className="text-sm text-gray-600">{userData.phone}</p>
        //             </div>
        //         </div>
        //     )}
        // </div>


        <div className="max-w-xl mx-auto m-80 bg-white shadow-md rounded-lg overflow-hidden">
    {userData && (
        <div className="flex justify-items-center items-center">
            <div className="w-1/3 ml-1">
                <img src={userData.picture.large} alt="User" className="w-24 h-24 rounded-full" />
            </div>
            <div className="w-2/3 px-4 py-2">
                <h2 className="text-lg font-semibold">{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</h2>
                <p className="text-sm text-gray-600">{userData.gender}</p>
                <p className="text-sm text-gray-600">{userData.email}</p>
                <p className="text-sm text-gray-600">{userData.phone}</p>
            </div>
        </div>
    )}
</div>



    );
};

export default Card;


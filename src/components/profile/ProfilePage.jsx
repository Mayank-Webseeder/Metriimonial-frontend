import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [userData, setUserData] = useState({});
    
    const fetchProfileData = async () => {
        let userDetails = JSON.parse(localStorage.getItem("userInfo"));
        if (!userDetails || !userDetails.token) {
            console.error("No token found, please login again.");
            alert("No token found. Redirecting to login.");
            window.location.href = "/login"; 
            return;
        }
        let Token = userDetails.token;

        try {
            const response = await axios.get(
                'https://api-matrimonial.webseeder.tech/api/v1/user/view', 
                {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                }
            );
            console.log("user-details trougn token", response.data);
            setUserData(response.data.data);
            console.log("user-data", userData);
        } catch (error) {
            console.error('Error fetching profile data:', error.response?.data?.message || error.message);
            if (error.response?.status === 401) {
                alert("Session expired. Please login again.");
                localStorage.removeItem("userInfo");
                window.location.href = "/login"; 
            }
        }
    };

    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <div className="min-h-screen bg-white-100 flex flex-col items-center justify-center p-4">
            {/* Profile Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl text-center">
                {/* Background Image */}
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Cover"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    {/* Profile Picture */}
                    <img
                        src={userData.profilePic || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="w-36 h-36 rounded-full border-4 border-white absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                    />
                </div>
                
                {/* Name and Details Side by Side */}
                <div className="mt-20 grid grid-cols-2 gap-4 text-left">
                    <p><span className="font-bold">Name:</span> {userData.username}</p>
                    <p><span className="font-bold">Phone:</span> {userData.mobileNo}</p>
                    <p><span className="font-bold">DOB:</span> {userData.dob}</p>
                    <p><span className="font-bold">City:</span> {userData.city}</p>
                    <p><span className="font-bold">Gender:</span> {userData.gender}</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                    <button onClick={() => window.location.href = "/profile-header"} className="flex items-center justify-center p-3 bg-[#762140] text-white rounded-lg hover:bg-[#762140]">
                        📄 Create Bio Data
                    </button>
                    <button onClick={() => window.location.href = "/user-form"} className="flex items-center justify-center p-3 bg-[#762140] text-white rounded-lg hover:bg-[#762140]">
                        ➕ Register as Pandit/Jyotish/Kathavachak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

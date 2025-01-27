import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const HandlenavigateToBiodata = () => {
        navigate('/profile-header');
    };

    const HandlenavigateToRegister = () => {
        navigate('/user-form');
    };

    const handleEditProfile = () => {
        navigate('/profile-page/edit-profile'); // Navigate to an edit profile page
    };

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
                        src="/ProfileImage.png"
                        alt="Cover"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    {/* Profile Picture */}
                    <div className="relative w-36 h-36 mx-auto">
                        <img
                            src={userData.profilePic || '/ProfileImage.png'}
                            alt="Profile"
                            className="w-36 h-36 rounded-full border-4 border-white"
                        />
                        {/* Edit Camera Icon */}
                        <div className="relative">
                            <button
                                onClick={handleEditProfile}
                                className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                                title="Edit Profile"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.232 5.232l3.536 3.536M9 11l3.536-3.536m0 0l5.464 5.464M5.636 8.464A4.5 4.5 0 118.464 5.636M12 15l-1.293 1.293m0 0a1.5 1.5 0 001.415 1.415m-1.415-1.415L9 19m6.536-5.464a4.5 4.5 0 105.464-5.464m-5.464 5.464L15 9"
                                    />
                                </svg>
                            </button>
                            {/* Tooltip */}
                            <span className="absolute bottom-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100">
                                Edit Profile
                            </span>
                        </div>
                    </div>
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
                    <button onClick={HandlenavigateToBiodata} className="flex items-center justify-center p-3 bg-[#762140] text-white rounded-lg hover:bg-[#762140]">
                        📄 Create Bio Data
                    </button>
                    <button onClick={() => HandlenavigateToRegister()} className="flex items-center justify-center p-3 bg-[#762140] text-white rounded-lg hover:bg-[#762140]">
                        ➕ Register as Pandit/Jyotish/Kathavachak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

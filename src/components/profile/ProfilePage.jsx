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
        <div className="min-h-screen bg-white-100 flex justify-center items-center p-4 md:pl-64">
            {/* Profile Section */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl text-center">
                {/* Background Image */}
                <div className="relative">
                    <img
                        src="/ProfileImage.png"
                        alt="Cover"
                        className="w-full h-56 object-cover rounded-t-lg"
                    />
                    {/* Profile Picture */}
                    <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-44 h-44">
                        <img
                            src={userData.profilePic || '/ProfileImage.png'}
                            alt="Profile"
                            className="w-44 h-44 rounded-full border-4 border-white object-cover"
                        />
                        {/* Edit Camera Icon */}
                        <button
                            onClick={handleEditProfile}
                            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                            title="Edit Profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.232 5.232l3.536 3.536M9 11l3.536-3.536m0 0l5.464 5.464M5.636 8.464A4.5 4.5 0 118.464 5.636M12 15l-1.293 1.293m0 0a1.5 1.5 0 001.415 1.415m-1.415-1.415L9 19m6.536-5.464a4.5 4.5 0 105.464-5.464m-5.464 5.464L15 9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Name and Details Side by Side */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <p className="font-semibold text-gray-700">Name: <span className="font-serif">{userData.username}</span></p>
                    <p className="font-semibold text-gray-700">Phone: <span className="font-serif">{userData.mobileNo}</span></p>
                    <p className="font-semibold text-gray-700">DOB: <span className="font-serif">{userData.dob}</span></p>
                    <p className="font-semibold text-gray-700">City: <span className="font-serif">{userData.city}</span></p>
                    <p className="font-semibold text-gray-700">Gender: <span className="font-serif">{userData.gender}</span></p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-sm">
                    <button onClick={HandlenavigateToBiodata} className="flex items-center justify-center p-4 bg-[#762140] text-white rounded-lg hover:bg-[#5e1a32]">
                        📄 Create Bio Data
                    </button>
                    <button onClick={HandlenavigateToRegister} className="flex items-center justify-center p-4 bg-[#762140] text-white rounded-lg hover:bg-[#5e1a32]">
                        ➕ Register as Pandit/Jyotish/Kathavachak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

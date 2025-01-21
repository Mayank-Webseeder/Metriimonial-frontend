import React, { useState } from 'react';
import DetailInfo from '../Services/detailinfo/DetailInfo';
import PreferenceForm from '../Services/preferenceform/PreferenceForm';
import PersonalDetailsForm from '../PersonalDetailsForm';
// import DetailInfo from './DetailInfo';
// import PartnerPreference from './PartnerPreference';

const ProfileHeader = () => {
    const [activeTab, setActiveTab] = useState('detailInfo'); // Default to DetailInfo component

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto text-center">
            {/* Background Image */}
            <div className="relative">
                <img
                    src="https://via.placeholder.com/600x300"
                    alt="Cover"
                    className="w-full h-60 object-cover rounded-lg"
                />
                {/* Profile Picture */}
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-48 h-48 rounded-full border-4 border-white absolute -bottom-24 left-1/2 transform -translate-x-1/2"
                />
            </div>

            {/* Name and Details */}
            <div className="mt-28 text-center">
                <h2 className="text-3xl font-bold">Raj Shah</h2>
                <p className="text-lg">User ID: 1212312313 | 23 yrs</p>
                <p className="text-lg">Unmarried | Lives in London</p>
            </div>

            {/* Action Tabs */}
            <div className="flex justify-center gap-12 mt-12">
                <button onClick={() => setActiveTab('detailInfo')} className="text-center">
                    <span className="text-4xl">👤</span>
                    <p className="mt-2 text-lg">Detailed Profile</p>
                </button>
                <button onClick={() => setActiveTab('partnerPreference')} className="text-center">
                    <span className="text-4xl">👥</span>
                    <p className="mt-2 text-lg">Partner Preference</p>
                </button>
                <button onClick={() => setActiveTab('photoGallery')} className="text-center">
                    <span className="text-4xl">📷</span>
                    <p className="mt-2 text-lg">Photo Gallery</p>
                </button>
            </div>

            {/* Conditional Rendering of Components */}
            <div className="mt-12">
                {activeTab === 'detailInfo' && <PersonalDetailsForm />}
                {activeTab === 'partnerPreference' && <PreferenceForm />}
            </div>
        </div>
    );
};

export default ProfileHeader;

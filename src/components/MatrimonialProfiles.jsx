import React, { useState } from 'react';

const MatrimonialProfiles = () => {
  const [activeTab, setActiveTab] = useState('Girls'); // State for active tab

  const profiles = [
    {
      name: 'Priyanshi Sharma',
      age: 25,
      height: 5.95,
      location: 'Indore',
      subCaste: 'Engineer',
      maritalStatus: 'Unmarried',
      income: '₹10 LPA',
      manglik: 'No',
      education: 'MCA',
      disability: 'No',
      image: '/MatrimonialProfile.png',
    },
    // Add more profiles here
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-3.5 bg-pink-100 shadow-md">
        <button className="text-xl">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="text-lg font-bold text-[#762140]">Matrimony</h1>
        <button className="text-xl">
          <i className="fas fa-search"></i>
        </button>
      </header>

      {/* Tabs Section */}
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 border ${
            activeTab === 'Girls' ? 'bg-[#762140] text-white' : 'bg-white text-[#762140]'
          } rounded-l-md`}
          onClick={() => setActiveTab('Girls')}
        >
          Girls
        </button> &nbsp;
        <button
          className={`px-4 py-2 border ${
            activeTab === 'Boys' ? 'bg-[#762140] text-white' : 'bg-white text-[#762140]'
          }`}
          onClick={() => setActiveTab('Boys')}
        >
          Boys
        </button>&nbsp;
        <button
          className="px-4 py-2 border bg-white text-[#762140] rounded-r-md"
        >
          Set Preferences
        </button> 
      </div>

      {/* Profiles Section */}
      <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-45 "
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{profile.name}</h2>
              <p className="text-sm">
                Age: {profile.age} / Height: {profile.height}
              </p>
              <p className="text-sm">{profile.location}</p>
              <p className="text-sm">Sub-caste: {profile.subCaste}</p>
              <p className="text-sm">{profile.maritalStatus}</p>
              <p className="text-sm">Income: {profile.income}</p>
              <p className="text-sm">Manglik: {profile.manglik}</p>
              <p className="text-sm">Education: {profile.education}</p>
              <p className="text-sm">Disability: {profile.disability}</p>
            </div>
            <div className="flex justify-around p-2 border-t bg-gray-100">
              <button className="text-sm text-[#762140]">
                <i className="far fa-bookmark"></i> Save
              </button>
              <button className="text-sm text-[#762140]">
                <i className="fas fa-share"></i> Share
              </button>
              <button className="text-sm text-[#762140]">
                <i className="fas fa-phone"></i> Call
              </button>
              <button className="text-sm text-[#762140]">
                <i className="fas fa-exclamation-circle"></i> Report
              </button>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
};

export default MatrimonialProfiles;

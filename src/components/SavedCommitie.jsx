import React, { useState } from "react";
import { Link } from "react-router-dom";

const SavedCommittee = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const profiles = [
    {
      name: "Viswakarma Group",
      location: "London",
      subcaste: "subcaste name",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Anand Group",
      location: "New York",
      subcaste: "subcaste name",
      image: "https://via.placeholder.com/150",
    },
  ];

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.subcaste.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <div className="bg-gray-200 p-4 flex items-center justify-between">
        <button className="text-lg font-semibold">&lt; Saved</button>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by name, location, subcaste"
            className="border p-2 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="text-lg">🔔</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-between p-4">
      <Link to="/saved-profiles"  className=" px-4 py-2 rounded-md">Biodata</Link>
        <Link to="/saved-pandit" className="border px-4 py-2  rounded-md">Pandit</Link>
        <Link to="/saved-dharmashala" className="border px-4 py-2 rounded-md">Dharmshala</Link>
        <Link to="/saved-commitie" className="border px-4 py-2 bg-red-900 text-white rounded-md">Commitiee</Link>
      </div>

      {/* Section Title */}
      <div className="bg-gray-300 p-2 font-bold text-center">
        MATRIMONY Saved Profile
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="font-bold text-lg mt-2">{profile.name}</h3>
              <p className="text-gray-500">{profile.location}</p>
              <p className="text-sm text-gray-600">{profile.subcaste}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No profiles found</p>
        )}
      </div>
    </div>
  );
};

export default SavedCommittee;

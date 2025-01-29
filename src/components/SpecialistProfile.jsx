import React, { useEffect, useState } from "react";
import PageHeader from "./common/PageHeader";
import { Link } from "react-router-dom";
import {
  panditProfiles,
  jyotishProfiles,
  kathavachakProfiles,
} from "./data/specialistMockData";
import { useParams } from "react-router-dom";

const UserManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [profileData, setProfileData] = useState([]);
  const { userType } = useParams();

  // Get the profile data dynamically based on userType
  const loadProfileData = () => {
    if (userType === "pandit") {
      setProfileData(panditProfiles);
    } else if (userType === "astrologer") {
      setProfileData(jyotishProfiles);
    } else if (userType === "kathavachak") {
      setProfileData(kathavachakProfiles);
    } else {
      setProfileData([]); // Default to an empty array if no matching userType
    }
  };

  useEffect(() => {
    loadProfileData();
  }, [userType]);

  const [filteredUsers, setFilteredUsers] = useState([]); // Initialize as empty

  useEffect(() => {
    // Filter when profileData changes
    filterUsers(searchQuery, stateFilter, cityFilter);
  }, [profileData]);

  const states = [...new Set(profileData.map((user) => user.state))];
  const cities = [...new Set(profileData.map((user) => user.villageCity))];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterUsers(e.target.value, stateFilter, cityFilter);
  };

  const handleStateFilter = (e) => {
    setStateFilter(e.target.value);
    filterUsers(searchQuery, e.target.value, cityFilter);
  };

  const handleCityFilter = (e) => {
    setCityFilter(e.target.value);
    filterUsers(searchQuery, stateFilter, e.target.value);
  };

  const filterUsers = (query, state, city) => {
    let filtered = profileData.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase())
    );
    if (state) filtered = filtered.filter((user) => user.state === state);
    if (city) filtered = filtered.filter((user) => user.villageCity === city);

    setFilteredUsers(filtered);
  };

  const handleToggle = (index) => {
    const updatedUsers = [...filteredUsers];
    updatedUsers[index].isEnabled = !updatedUsers[index].isEnabled;
    setFilteredUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen p-8 pt-0">
      <PageHeader title={`${userType} Profiles`} />
      <div className="max-w-8xl mx-auto bg-white mt-6 p-6 rounded-lg shadow-lg">
        {/* Search and Filter Section */}
        <div className="flex justify-start mb-4 space-x-4">
          <input
            type="text"
            className="p-2 border rounded-md bg-slate-100 text-slate-900"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
          />

          <select
            className="p-2 border rounded-md bg-slate-100 text-slate-900"
            value={stateFilter}
            onChange={handleStateFilter}
          >
            <option value="">Filter by state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            className="p-2 border rounded-md bg-slate-100 text-slate-900"
            value={cityFilter}
            onChange={handleCityFilter}
          >
            <option value="">Filter by village/city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* User Table */}
        <table className="min-w-full table-auto bg-slate-50 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-slate-900 text-slate-100">
            <tr>
              <th className="py-3 px-4 text-left">User ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Mobile</th>
              <th className="py-3 px-4 text-left">State</th>
              <th className="py-3 px-4 text-left">Village/City</th>
              <th className="py-3 px-4 text-left">Subscribed</th>
              <th className="py-3 px-4 text-left">Subscription Expiry</th>
              <th className="py-3 px-4 text-left">Access</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="hover:bg-slate-100">
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4 text-blue-600">
                  <Link to={`/${userType}/${user.id}`}>{user.fullName}</Link>
                </td>
                <td className="py-3 px-4">{user.mobile}</td>
                <td className="py-3 px-4">{user.state}</td>
                <td className="py-3 px-4">{user.villageCity}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-medium ${
                      user.isSubscribed ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.isSubscribed ? "Yes" : "No"}
                  </span>
                </td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={user.isEnabled}
                      onChange={() => handleToggle(index)}
                    />
                    <span className="w-11 h-6 bg-slate-200 rounded-full inline-flex items-center">
                      <span
                        className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
                          user.isEnabled
                            ? "translate-x-6 bg-green-500"
                            : "translate-x-1 bg-red-500"
                        }`}
                      ></span>
                    </span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagementPage;

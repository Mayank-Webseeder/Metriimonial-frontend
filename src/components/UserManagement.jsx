import React, { useState } from "react";
import PageHeader from "./common/PageHeader";
import { Link } from "react-router-dom";
import { mockUsers } from "./data/mockusers";

const genderData = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const UserManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = mockUsers.filter((user) =>
      user.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleToggle = (index) => {
    const updatedUsers = [...filteredUsers];
    updatedUsers[index].isEnabled = !updatedUsers[index].isEnabled;
    setFilteredUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen p-8 pt-0">
      <PageHeader title="User Management" />
      <div className="max-w-8xl mx-auto bg-white mt-6 p-6 rounded-lg shadow-lg">
        {/* Search and Filter Section */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              onChange={(e) => console.log("Filter by gender:", e.target.value)}
            >
              <option value="">Filter by gender</option>
              {genderData.map((gender) => (
                <option key={gender.value} value={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* User Table */}
        <table className="min-w-full table-auto bg-slate-50 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-slate-900 text-slate-100">
            <tr>
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">City</th>
              <th className="py-3 px-4 text-left">Gender</th>
              <th className="py-3 px-4 text-left">Mobile</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="hover:bg-slate-100">
                <td className="py-3 px-4 text-blue-600">
                  <Link to={`/user/${user.id}`}>{user.fullName}</Link>
                </td>
                <td className="py-3 px-4">{user.city}</td>
                <td className="py-3 px-4">{user.gender}</td>
                <td className="py-3 px-4">{user.mobile}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-medium ${
                      user.isEnabled ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.isEnabled ? "Enabled" : "Disabled"}
                  </span>
                </td>
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
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
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

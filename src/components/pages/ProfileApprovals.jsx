import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import { Link } from "react-router-dom";
import { mockUsers } from "../data/mockusers"; // Assuming mockUsers is updated with the 'appliedFor' field

const appliedForData = [
  { label: "Activist", value: "Activist" },
  { label: "Pandit", value: "Pandit" },
  { label: "Astrologer", value: "Astrologer" },
  { label: "Kathavachak", value: "Kathavachak" },
];

const ProfileApprovals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);
  const [selectedAppliedFor, setSelectedAppliedFor] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filterUsers = (query, appliedFor, from, to) => {
    let filtered = mockUsers.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase())
    );

    if (appliedFor) {
      filtered = filtered.filter((user) => user.appliedFor === appliedFor);
    }

    if (from && to) {
      filtered = filtered.filter((user) => {
        const userDate = new Date(user.createdAt);
        return userDate >= new Date(from) && userDate <= new Date(to);
      });
    }

    setFilteredUsers(filtered);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterUsers(e.target.value, selectedAppliedFor, fromDate, toDate);
  };

  const handleAppliedForFilter = (e) => {
    setSelectedAppliedFor(e.target.value);
    filterUsers(searchQuery, e.target.value, fromDate, toDate);
  };

  const handleApproveToggle = (index) => {
    const updatedUsers = [...filteredUsers];
    updatedUsers[index].isApproved = !updatedUsers[index].isApproved;
    setFilteredUsers(updatedUsers);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedAppliedFor("");
    setFromDate("");
    setToDate("");
    setFilteredUsers(mockUsers);
  };

  return (
    <div className="min-h-screen p-8 pt-0">
      <PageHeader title="Profile Approvals" />
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
              value={selectedAppliedFor}
              onChange={handleAppliedForFilter}
            >
              <option value="">Filter by Applied For</option>
              {appliedForData.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* Date Range Filter */}
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value);
                filterUsers(
                  searchQuery,
                  selectedAppliedFor,
                  e.target.value,
                  toDate
                );
              }}
            />
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={toDate}
              onChange={(e) => {
                setToDate(e.target.value);
                filterUsers(
                  searchQuery,
                  selectedAppliedFor,
                  fromDate,
                  e.target.value
                );
              }}
            />
          </div>
          <button
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>

        {/* User Table */}
        <table className="min-w-full table-auto bg-slate-50 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-slate-900 text-slate-100">
            <tr>
              <th className="py-3 px-4 text-left">User ID</th>
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">Applied For</th>
              <th className="py-3 px-4 text-left">Gender</th>
              <th className="py-3 px-4 text-left">Mobile</th>
              <th className="py-3 px-4 text-left">Requested At</th>
              <th className="py-3 px-4 text-left">Approve</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="hover:bg-slate-100">
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4 text-blue-600">
                  <Link to={`/user/${user.id}`}>{user.fullName}</Link>
                </td>
                <td className="py-3 px-4">{user.appliedFor}</td>
                <td className="py-3 px-4">{user.gender}</td>
                <td className="py-3 px-4">{user.mobile}</td>
                <td className="py-3 px-4">
                  {new Date(user.createdAt).toLocaleDateString("en-GB")}
                </td>
                <td className="py-3 px-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={user.isApproved}
                      onChange={() => handleApproveToggle(index)}
                    />
                    <span className="w-11 h-6 bg-slate-200 rounded-full inline-flex items-center">
                      <span
                        className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
                          user.isApproved
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

export default ProfileApprovals;

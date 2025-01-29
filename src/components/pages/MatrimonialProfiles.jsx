import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import { Link } from "react-router-dom";
import { mockUsers } from "../data/mockusers";

const genderData = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const statusData = [
  { label: "Enabled", value: true },
  { label: "Disabled", value: false },
];

const subscriptionData = [
  { label: "Subscribed", value: true },
  { label: "Not Subscribed", value: false },
];

const MatrimonialProfiles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSubscription, setSelectedSubscription] = useState("");

  const filterUsers = (query, start, end, gender, status) => {
    let filtered = mockUsers.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase())
    );

    if (start && end) {
      filtered = filtered.filter((user) => {
        const createdAt = new Date(user.createdAt);
        return createdAt >= new Date(start) && createdAt <= new Date(end);
      });
    }

    if (gender) {
      filtered = filtered.filter((user) => user.gender === gender);
    }

    if (status !== "") {
      filtered = filtered.filter(
        (user) => user.isEnabled === (status === "true")
      );
    }

    setFilteredUsers(filtered);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterUsers(
      e.target.value,
      startDate,
      endDate,
      selectedGender,
      selectedStatus
    );
  };

  const handleDateFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    filterUsers(searchQuery, start, end, selectedGender, selectedStatus);
  };

  const handleGenderFilter = (e) => {
    setSelectedGender(e.target.value);
    filterUsers(
      searchQuery,
      startDate,
      endDate,
      e.target.value,
      selectedStatus
    );
  };

  const handleStatusFilter = (e) => {
    setSelectedStatus(e.target.value);
    filterUsers(
      searchQuery,
      startDate,
      endDate,
      selectedGender,
      e.target.value
    );
  };
  const handleSubscriptionFilter = (e) => {
    setSelectedSubscription(e.target.value);
    filterUsers(
      searchQuery,
      startDate,
      endDate,
      selectedGender,
      e.target.value
    );
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setStartDate("");
    setEndDate("");
    setSelectedGender("");
    setSelectedStatus("");
    setSelectedSubscription("");
    setFilteredUsers(mockUsers);
  };

  const handleToggle = (index) => {
    const updatedUsers = [...filteredUsers];
    updatedUsers[index].isEnabled = !updatedUsers[index].isEnabled;
    setFilteredUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen p-8 pt-0">
      <PageHeader title="Matrimonial Profiles" />
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
              value={selectedGender}
              onChange={handleGenderFilter}
            >
              <option value="">Filter by gender</option>
              {genderData.map((gender) => (
                <option key={gender.value} value={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
            <select
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={selectedStatus}
              onChange={handleStatusFilter}
            >
              <option value="">Filter by status</option>
              {statusData.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
            <select
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={selectedSubscription}
              onChange={handleSubscriptionFilter}
            >
              <option value="">Filter by subscription</option>
              {subscriptionData.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
            {/* Date Range Filter */}
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={startDate}
              onChange={(e) => handleDateFilter(e.target.value, endDate)}
            />
            <input
              type="date"
              className="p-2 border rounded-md bg-slate-100 text-slate-900"
              value={endDate}
              onChange={(e) => handleDateFilter(startDate, e.target.value)}
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
              <th className="py-3 px-4 text-left">City</th>
              <th className="py-3 px-4 text-left">Gender</th>
              <th className="py-3 px-4 text-left">Mobile</th>
              <th className="py-3 px-4 text-left">Created At</th>
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
                  <Link to={`/user/${user.id}`}>{user.fullName}</Link>
                </td>
                <td className="py-3 px-4">{user.city}</td>
                <td className="py-3 px-4">{user.gender}</td>
                <td className="py-3 px-4">{user.mobile}</td>
                <td className="py-3 px-4">
                  {new Date(user.createdAt).toLocaleDateString("en-GB")}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-medium ${
                      user.subscription ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.subscription ? "Yes" : "No"}
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

export default MatrimonialProfiles;

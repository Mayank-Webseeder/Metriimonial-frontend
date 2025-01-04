import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePandit, updatePandit } from "../redux/pandit/Panditslice";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Panditprofile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.panditData);

  const [search, setSearch] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // For modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Really want to delete the profile!!!!")) {
      dispatch(deletePandit(id));
    }
  };

  const handleUpdate = (id) => {
    const panditToUpdate = users.find((user) => user.id === id);
    localStorage.setItem("selectedpandit", JSON.stringify(panditToUpdate));
    navigate("/update-pandit");
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (!filterAge || user.age.toString() === filterAge)
  );

  return (
    <div className="ml-64 p-6">
      <h1 className="text-4xl font-bold mb-4">Pandit Details</h1>

      {/* Search and Filter */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border rounded-md w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by age"
          className="p-2 border rounded-md w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={filterAge}
          onChange={(e) => setFilterAge(e.target.value)}
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-[#762140] text-white">
              <th className="border p-4 text-left font-semibold">Name</th>
              <th className="border p-4 text-left font-semibold">Age</th>
              <th className="border p-4 text-left font-semibold">Email</th>
              <th className="border p-4 text-left font-semibold">View</th>
              <th className="border p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-blue-50 even:bg-gray-50">
                <td className="border p-4 text-gray-700">{user.name}</td>
                <td className="border p-4 text-gray-700">{user.age}</td>
                <td className="border p-4 text-gray-700">{user.email}</td>
                <td className="border p-4">
                  <button
                    onClick={() => handleView(user)}
                    className="px-3 py-1 text-white bg-[#762140] rounded-md flex items-center space-x-2 hover:bg-[#5b1a31]"
                  >
                    <FaEye className="mr-1" />
                    View
                  </button>
                </td>
                <td className="border p-4 flex space-x-2">
                  <button
                    onClick={() => handleUpdate(user.id)}
                    className="px-3 py-1 text-white bg-blue-500 rounded-md flex items-center space-x-2 hover:bg-blue-600"
                  >
                    <FaEdit className="mr-1" />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-md flex items-center space-x-2 hover:bg-red-600"
                  >
                    <FaTrash className="mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Age:</strong> {selectedUser.age}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Description:</strong> {selectedUser.description}</p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panditprofile;

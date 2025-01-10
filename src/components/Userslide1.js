import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye,FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../redux/user/Userslice";

function Userslide1() {
  const users = useSelector((state) => state.userdata);
  const [nameQuery, setNameQuery] = useState("");
  const [emailQuery, setEmailQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
          user.email.toLowerCase().includes(emailQuery.toLowerCase())
      )
    );
  }, [nameQuery, emailQuery, users]);

  const handleUpdate = (id) => {
    const userToUpdate = users.find((user) => user.id === id);
    localStorage.setItem("selectedUser", JSON.stringify(userToUpdate));
    navigate("/update");
  };

  const handleDelete = (id) => {
    if (window.confirm("Really want to delete entry!!!")) {
      dispatch(deleteUser(id));
    }
  };

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="ml-64 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">User Management</h1>

      <div className="mb-6 flex justify-between">
        <button
          onClick={() => navigate("/add-user")}
          className="px-4 py-2 text-white bg-[#762140] hover:bg-green-600 rounded-md flex items-center space-x-2"
        >
            
          Add User <FaPlus className="ml-2" />
        </button>
      </div>
      <Link to='/user-form'><div className="mb-6 flex justify-between">
        <button
          onClick={() => navigate("/add-user")}
          className="px-4 py-2 text-white bg-[#762140] hover:bg-green-600 rounded-md flex items-center space-x-2"
        >
            
           User-Form <FaPlus className="ml-2" />
        </button>
      </div></Link>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search by name"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
          className="border border-gray-300 p-3 rounded-md w-full shadow-sm focus:ring focus:ring-green-200"
        />
        <input
          type="text"
          placeholder="Search by email"
          value={emailQuery}
          onChange={(e) => setEmailQuery(e.target.value)}
          className="border border-gray-300 p-3 rounded-md w-full shadow-sm focus:ring focus:ring-green-200"
        />
      </div>

      <table className="w-full text-left border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#762140] text-white uppercase">
          <tr>
            <th className="p-4 border">Name</th>
            <th className="p-4 border">Age</th>
            <th className="p-4 border">Email</th>
            <th className="p-4 border">View Details</th>
            <th className="p-4 border">Actions</th>
           
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr
              key={user.id}
              className={`hover:bg-green-100 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="p-4 border">{user.name}</td>
              <td className="p-4 border">{user.age}</td>
              <td className="p-4 border">{user.email}</td>
              <td className="p-4 border">
                <button
                  onClick={() => handleView(user)}
                  className="px-3 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-md flex items-center"
                >
                  <FaEye className="mr-1" />
                  View
                </button>
              </td>
              <td className="p-4 border flex space-x-2">
                <button
                  onClick={() => handleUpdate(user.id)}
                  className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md flex items-center"
                >
                  <FaEdit className="mr-1" />
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md flex items-center"
                >
                  <FaTrash className="mr-1" />
                  Delete
                </button>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              User Details
            </h2>
            <p className="mb-4">
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p className="mb-4">
              <strong>Age:</strong> {selectedUser.age}
            </p>
            <p className="mb-4">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p className="mb-4">
              <strong>Complection:</strong> {selectedUser.complection}
            </p>
            <p className="mb-4">
              <strong>Height:</strong> {selectedUser.height}
            </p>
            <p className="mb-4">
              <strong>Weight:</strong> {selectedUser.weight}
            </p>
            <div className="flex justify-end">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
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

export default Userslide1;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/user/Userslice";

function Userprofileupdate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Load selected user from localStorage or Redux
  const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));

  // Initialize local state for editing
  const [user, setUser] = useState({ ...selectedUser });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Dispatch the updateUser action
    dispatch(updateUser(user));

    // Clear the selected user from localStorage
    localStorage.removeItem("selectedUser");

    // Navigate back to Userslide1
    navigate("/user-data");
  };

  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-4">Update User</h1>

      <form>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2">Age:</label>
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2">Height:</label>
            <input
              type="text"
              name="height"
              value={user.height}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-2">Weight:</label>
            <input
              type="text"
              name="weight"
              value={user.weight}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2">Complection:</label>
            <input
              type="text"
              name="complection"
              value={user.complection}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Userprofileupdate;

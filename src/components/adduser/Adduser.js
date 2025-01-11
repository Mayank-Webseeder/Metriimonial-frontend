import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user/Userslice"; // Update the path as needed
import { useNavigate } from "react-router-dom";

function Adduser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    height: "",
    weight: "",
    complection: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new user object with a unique id
    const newUser = {
      id: Date.now(), // Generates a unique id
      ...userData,
      age: parseInt(userData.age, 10), // Convert age to a number
      height: parseFloat(userData.height), // Convert height to a float
      weight: parseInt(userData.weight, 10), // Convert weight to a number
    };

    dispatch(addUser(newUser));

    navigate("/user-data");
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 bg-[#872a50] rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Add User</h2>
        <form onSubmit={handleSubmit}>
          {/* Row 1: Name and Age */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>
          </div>

          {/* Row 2: Email and Complection */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Complection
              </label>
              <input
                type="text"
                name="complection"
                value={userData.complection}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>
          </div>

          {/* Row 3: Height and Weight */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Height (in feet)
              </label>
              <input
                type="number"
                step="0.1"
                name="height"
                value={userData.height}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Weight (in kg)
              </label>
              <input
                type="number"
                name="weight"
                value={userData.weight}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#762140] font-bold py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adduser;

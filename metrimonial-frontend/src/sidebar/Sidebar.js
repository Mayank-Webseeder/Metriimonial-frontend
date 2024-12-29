import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUserAlt, FaUsers, FaBook, FaUserCircle, FaUserTie } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#762140] text-white fixed flex flex-col shadow-lg">
      {/* Sidebar Content */}
      <div className="p-4 flex-grow overflow-y-auto">
        {/* Sidebar Header */}
        <div className="mb-6 text-center">
          <img
            src="/metrimonial.png"
            alt="Logo"
            className="w-14 h-14 object-contain mx-auto rounded-full border-2 border-white"
          />
          <h1 className="text-xl font-bold mt-2">Metrimonial</h1>
          <h2 className="text-xs font-medium">Dashboard</h2>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/user-data"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaUserAlt className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">User Details</span>
              </Link>
            </li>
            <li>
              <Link
                to="/sub-admin"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaUsers className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Sub-Admin</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pandit"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaBook className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Pandit Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Kathavachak"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaUserCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Kathavachak</span>
              </Link>
            </li>
            <li>
              <Link
                to="/other-profile"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaUserTie className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Other Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button
          className="flex items-center justify-center w-full p-2 rounded-md bg-white text-[#762140] font-semibold shadow-md transition duration-300 hover:bg-[#a5526b] hover:text-white"
          onClick={() => alert("Logging out...")}
        >
          <FaSignOutAlt className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

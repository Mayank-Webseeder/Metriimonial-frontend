import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#762140] text-white fixed flex flex-col justify-between">
      {/* Sidebar Content */}
      <div className="p-4">
        <div className="mb-8">
          {/* Logo */}
          <img
            src="/metrimonial.png"
            alt="Logo"
            className="w-12 h-12 object-contain mx-auto rounded-full"
          />
          <h1 className="text-center text-2xl font-bold mt-2">Metrimonial-Dashboard</h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sub-admin"
                className="block p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                Sub-Admin
              </Link>
            </li>
            <li>
              <Link
                to="/pandit"
                className="block p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                Pandit-Profile
              </Link>
            </li>
            <li>
              <Link
                to="/Kathavachak"
                className="block p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                Kathavachak
              </Link>
            </li>
            <li>
              <Link
                to="/Kathavachak"
                className="block p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                Other-Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button
          className="flex items-center w-full p-2 rounded-md bg-white text-[#762140] font-semibold"
          onClick={() => alert("Logging out...")}
        >
          <FaSignOutAlt className="w-5 h-5 mr-2" /> {/* Logout icon */}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

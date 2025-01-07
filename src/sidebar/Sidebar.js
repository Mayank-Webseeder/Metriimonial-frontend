import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaUserAlt,
  FaUsers,
  FaBook,
  FaUserCircle,
  FaStar,
  FaHandshake,
  FaRegBuilding,
  FaBars
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userinfo");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen ${isOpen ? 'w-64' : 'w-20'} bg-[#762140] text-white fixed flex flex-col shadow-lg transition-all duration-300`}>
      {/* Toggle Button */}
      <button
        className="p-4 text-white focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Sidebar Content */}
      <div className="p-4 flex-grow">
        {/* Sidebar Header */}
        <div className="mb-4 text-center">
          <img
            src="/metrimonial.png"
            alt="Logo"
            className="w-14 h-14 object-contain mx-auto rounded-full border-2 border-white"
          />
          {isOpen && (
            <>
              <h1 className="text-xl font-bold mt-2">Matrimonial</h1>
              <h2 className="text-xs font-medium">Dashboard</h2>
            </>
          )}
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/user-data"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaUserAlt className="w-4 h-4 mr-2" />
                {isOpen && <span className="text-sm font-medium">User Details</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/sub-admin"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaUsers className="w-4 h-4 mr-2" />
                {isOpen && <span className="text-sm font-medium">Sub-Admin</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/pandit"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaBook className="w-4 h-4 mr-2" />
                {isOpen && <span className="text-sm font-medium">Pandit Profile</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/kathavachak"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaUserCircle className="w-4 h-4 mr-2" />
                {isOpen && <span className="text-sm font-medium">Kathavachak</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/astrologer"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaStar className="w-4 h-4 mr-2" />
                {isOpen && <span className="text-sm font-medium">Astrologer</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/activist"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaHandshake className="w-4 h-4 mr-2" />
                {isOpen && <span className="text-sm font-medium">Activist</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/committee"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaRegBuilding className="w-4 h-4 mr-2" />
                {isOpen && <span className="text-sm font-medium">Committee</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button
          className="flex items-center justify-center w-full p-2 rounded-md bg-white text-[#762140] font-semibold shadow-md transition duration-300 hover:bg-[#a5526b] hover:text-white"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="w-4 h-4 mr-2" />
          {isOpen && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
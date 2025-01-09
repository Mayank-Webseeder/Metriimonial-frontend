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
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userinfo");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed flex flex-col h-screen z-50">
      {/* Toggle Button Always Visible */}
      <button
        className="p-4 text-white bg-[#762140] focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar Content */}
      <div
        className={`bg-[#762140] text-white shadow-lg transition-all duration-300 ${
          isOpen ? "w-64 p-4" : "w-0 overflow-hidden"
        }`}
      >
        {/* Sidebar Header */}
        <div className="text-center">
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
          <ul className="space-y-2 mt-4">
            <li>
              <Link
                to="/user-data"
                className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
              >
                <FaUserAlt className="w-4 h-4 mr-2" />
                {isOpen && <span>User Details</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/sub-admin"
                className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
              >
                <FaUsers className="w-4 h-4 mr-2" />
                {isOpen && <span>Sub-Admin</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/pandit"
                className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
              >
                <FaBook className="w-4 h-4 mr-2" />
                {isOpen && <span>Pandit Profile</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/kathavachak"
                className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
              >
                <FaUserCircle className="w-4 h-4 mr-2" />
                {isOpen && <span>Kathavachak</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/astrologer"
                className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
              >
                <FaStar className="w-4 h-4 mr-2" />
                {isOpen && <span>Astrologer</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/activist"
                className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
              >
                <FaHandshake className="w-4 h-4 mr-2" />
                {isOpen && <span>Activist</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/committee"
                className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
              >
                <FaRegBuilding className="w-4 h-4 mr-2" />
                {isOpen && <span>Committee</span>}
              </Link>
            </li>
          </ul>
          {/* Logout Button */}
          {isOpen && (
            <div className="p-4">
              <button
                className="flex items-center justify-center w-full p-2 rounded-md bg-white text-[#762140] font-semibold shadow-md"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

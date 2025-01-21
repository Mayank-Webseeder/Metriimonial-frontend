import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaHome,
  FaUserAlt,
  FaUsers,
  FaBook,
  FaUserCircle,
  FaStar,
  FaHandshake,
  FaHotel,
  FaBars,
  FaTimes,
  FaNewspaper
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userInfo");
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
          <FaTimes className="w-4 h-4" />
        ) : (
          <FaBars className="w-5 h-6" />
        )}
      </button>

      {/* Sidebar Content with Scrollable Area */}
      <div
        className={`bg-[#762140] text-white shadow-lg transition-all duration-300 overflow-y-auto no-scrollbar ${
          isOpen ? "w-64 p-2" : "w-0 overflow-hidden"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hide Scrollbar */}
        <style>
          {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Sidebar Header */}
        <div className="text-center">
          <img
            src="/metrimonial.png"
            alt="Logo"
            className="w-20 h-20 object-contain mx-auto rounded-full border-2 border-white"
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
            {[
              { path: "/profile-page", label: "Profile", icon: <FaUserAlt /> },

              { path: "/admin-dashboard", label: "Dashboard", icon: <FaHome /> },
              { path: "/user-data", label: "User Details", icon: <FaUserAlt /> },
              { path: "/sub-admin", label: "Sub-Admin", icon: <FaUsers /> },
              { path: "/pandit", label: "Pandit Profile", icon: <FaBook /> },
              { path: "/kathavachak-profile", label: "Kathavachak", icon: <FaUserCircle /> },
              { path: "/astrologer-profile", label: "Astrologer", icon: <FaStar /> },
              { path: "/committee-activist", label: "Activist & Committee", icon: <FaHandshake /> },
              { path: "/dharm-shala", label: "Dharamshala", icon: <FaHotel /> },
              { path: "/news&events", label: "News & Events", icon: <FaNewspaper /> }
              ,
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 hover:bg-white hover:text-[#762140]"
                >
                  <span className="w-5 h-5 mr-2">{item.icon}</span>
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
      </div>
    </div>
  );
};

export default Sidebar;

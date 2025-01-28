import React from "react";
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
  FaNewspaper,
  FaChalkboardTeacher,
  FaRegSmile,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-[#762140] text-white shadow-lg z-50 flex flex-col">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center py-4">
        <img
          src="./download.jpeg"
          alt="Logo"
          className="rounded-full border-2 border-white w-16 h-16 object-cover"
        />
        <div className="ml-2">
          <h1 className="text-lg font-bold">Matrimonial</h1>
          <h2 className="text-xs">Dashboard</h2>
        </div>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-2">
        <nav className="mt-4">
          <ul className="space-y-2">
            {[
              { path: "/profile-page", label: "Profile", icon: <FaUserAlt /> },
              { path: "/admin-dashboard", label: "Dashboard", icon: <FaHome /> },
              { path: "/user-data", label: "User Details", icon: <FaUsers /> },
              { path: "/sub-admin", label: "Sub-Admin", icon: <FaChalkboardTeacher /> },
              { path: "/pandit", label: "Pandit Profile", icon: <FaBook /> },
              { path: "/kathavachak-profile", label: "Kathavachak", icon: <FaUserCircle /> },
              { path: "/astrologer-profile", label: "Astrologer", icon: <FaStar /> },
              { path: "/committee-activist", label: "Activist & Committee", icon: <FaHandshake /> },
              { path: "/dharm-shala", label: "Dharamshala", icon: <FaHotel /> },
              { path: "/news&events", label: "News & Events", icon: <FaNewspaper /> },
              { path: "/home-page", label: "Home", icon: <FaHome /> },
              { path: "/success-story", label: "Success Story", icon: <FaRegSmile /> },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 rounded-md hover:bg-white hover:text-[#762140] transition-colors duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="ml-4 text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-2">
        <button
          className="flex items-center justify-center w-full p-2 rounded-md bg-white text-[#762140] font-semibold shadow-md hover:bg-gray-200"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="text-lg" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

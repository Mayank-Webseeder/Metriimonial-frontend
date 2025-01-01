import React from "react";
<<<<<<< HEAD
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
} from "react-icons/fa";
=======
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
>>>>>>> parent of 8b97783 (second commit)

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userinfo");
    navigate("/login");
  };

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
<<<<<<< HEAD
          <h1 className="text-xl font-bold mt-2">Matrimonial</h1>
          <h2 className="text-xs font-medium">Dashboard</h2>
=======
          <h1 className="text-center text-2xl font-bold mt-2">Metrimonial-Dashboard</h1>
>>>>>>> parent of 8b97783 (second commit)
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
<<<<<<< HEAD
                to="/kathavachak"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
=======
                to="/Kathavachak"
                className="block p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
>>>>>>> parent of 8b97783 (second commit)
              >
                Kathavachak
              </Link>
            </li>
            <li>
              <Link
<<<<<<< HEAD
                to="/astrologer"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaStar className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Astrologer</span>
              </Link>
            </li>
            <li>
              <Link
                to="/activist"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaHandshake className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Activist</span>
              </Link>
            </li>
            <li>
              <Link
                to="/committee"
                className="flex items-center p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                <FaRegBuilding className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Committee</span>
=======
                to="/Kathavachak"
                className="block p-2 rounded-md transition duration-300 hover:bg-white hover:text-[#762140]"
              >
                Other-Profile
>>>>>>> parent of 8b97783 (second commit)
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button
<<<<<<< HEAD
          className="flex items-center justify-center w-full p-2 rounded-md bg-white text-[#762140] font-semibold shadow-md transition duration-300 hover:bg-[#a5526b] hover:text-white"
          onClick={handleLogout}
=======
          className="flex items-center w-full p-2 rounded-md bg-white text-[#762140] font-semibold"
          onClick={() => alert("Logging out...")}
>>>>>>> parent of 8b97783 (second commit)
        >
          <FaSignOutAlt className="w-5 h-5 mr-2" /> {/* Logout icon */}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

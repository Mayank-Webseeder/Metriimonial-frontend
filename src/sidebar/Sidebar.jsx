import { AiOutlineUser } from "react-icons/ai";
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

  const menuItems = [
    { path: "/admin-dashboard", label: "Dashboard", icon: <FaHome /> },
    { path: "/user-data", label: "User Details", icon: <FaUsers /> },
    {
      path: "/community-members",
      label: "Community Members",
      icon: <FaChalkboardTeacher />,
    },
    { path: "/pandit", label: "Pandit Profile", icon: <FaBook /> },
    {
      path: "/kathavachak-profile",
      label: "Kathavachak",
      icon: <FaUserCircle />,
    },
    { path: "/astrologer-profile", label: "Astrologer", icon: <FaStar /> },
    {
      path: "/committee-activist",
      label: "Activist & Committee",
      icon: <FaHandshake />,
    },
    { path: "/dharm-shala", label: "Dharamshala", icon: <FaHotel /> },
    { path: "/news&events", label: "News & Events", icon: <FaNewspaper /> },

    { path: "/success-story", label: "Success Story", icon: <FaRegSmile /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 border-r border-white/20 text-slate-100 flex flex-col">
      <div className="flex items-center gap-3 p-6 border-b border-white/20">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white/10 overflow-hidden">
          <AiOutlineUser size={30} />
        </div>
        <div>
          <h1 className="font-semibold text-white">Admin</h1>
          <Link to="/" className="text-xs text-slate-500 uppercase">
            Raj Sharma
          </Link>
        </div>
      </div>

      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-white transition-colors"
        >
          <FaSignOutAlt />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

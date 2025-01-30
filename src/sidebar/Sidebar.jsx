import { IoIosNotificationsOutline } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { MdApproval } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

  const handleLogout = () => {
    let confirmation = window.confirm("Are you sure you want to logout?");
    if (confirmation) {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userInfo");
      navigate("/login");
    }
  };

  const menuItems = [
    { path: "/", label: "Dashboard", icon: <FaHome /> },
    { path: "/all-users", label: "All Users", icon: <FaUsers /> },
    {
      path: "/matrimonial-profiles",
      label: "Matrimonial Profiles",
      icon: <MdOutlinePeopleAlt />,
    },

    { path: "/specialist/pandit", label: "Pandit Profile", icon: <FaBook /> },
    {
      path: "/specialist/kathavachak",
      label: "Kathavachak",
      icon: <FaUserCircle />,
    },
    { path: "/specialist/astrologer", label: "Astrologer", icon: <FaStar /> },
    {
      path: "/community-members",
      label: "Community Members",
      icon: <FaChalkboardTeacher />,
    },
    {
      path: "/activist-profiles",
      label: "Activist Profiles",
      icon: <FaHandshake />,
    },
    {
      path: "/profile-approvals",
      label: "Profile Approvals",
      icon: <MdApproval />,
    },
    {
      path: "/manage-subscriptions",
      label: "Subscription",
      icon: <MdManageHistory />,
    },
    {
      path: "/profile-reports",
      label: "Profile Reports",
      icon: <MdReportGmailerrorred />,
    },
    { path: "/dharm-shala", label: "Dharamshala", icon: <FaHotel /> },
    { path: "/news&events", label: "News & Events", icon: <FaNewspaper /> },

    // { path: "/success-story", label: "Success Story", icon: <FaRegSmile /> },
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

      <nav className="p-4 flex-1 overflow-y-auto custom-scroll">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                  location.pathname === item.path ? "bg-slate-800" : ""
                } hover:bg-slate-800 hover:text-white transition-colors`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/10 space-y-4">
        <Link
          to="/notifications"
          className="flex relative items-center justify-center w-full gap-2 px-4 py-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-white transition-colors"
        >
          <IoIosNotificationsOutline size={30} /> Notifications
          <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-xs flex justify-center items-center rounded-full bg-red-400">
            99
          </span>
        </Link>
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

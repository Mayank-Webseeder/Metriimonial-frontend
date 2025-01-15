// File: src/App.jsx
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineShortcut } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const AdminPanel = () => {
  const pathName = useSearchParams();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-pink-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <div className="p-6">
          <button className="w-full py-2 px-4 bg-pink-500 text-white rounded-lg">
            New User
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <button className="block w-full text-left p-2 rounded hover:bg-pink-100">
            <div className="flex items-center">
              <span>
                <IoSettingsOutline />
              </span>
              Settings
            </div>
          </button>
          <button className="block w-full text-left p-2 rounded hover:bg-pink-100">
            <div className="flex items-center">
              <span>
                <MdOutlineFeedback />
              </span>
              Feedback
            </div>
          </button>
          <button className="block w-full text-left p-2 rounded hover:bg-pink-100">
            <div className="flex items-center">
              <span>
                <IoIosHelpCircleOutline />
              </span>
              Help
            </div>
          </button>
          <button className="block w-full text-left p-2 rounded hover:bg-pink-100">
            <div className="flex items-center">
              <span>
                <MdOutlineShortcut />
              </span>
              Shortcuts
            </div>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Welcome Section */}
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome, Admin</h2>
          <p className="text-gray-600">
            Here's what's been happening in the last 7 days.
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-gray-500">Users</h3>
            <p className="text-2xl font-bold">24,000</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-gray-500">Pandits</h3>
            <p className="text-2xl font-bold">1,200</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-gray-500">Kathabachaks</h3>
            <p className="text-2xl font-bold">2,200</p>
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="p-4 bg-white shadow rounded-lg mb-6">
          <h3 className="text-gray-500 mb-2">User Growth</h3>
          <div className="h-48 bg-pink-100 flex items-center justify-center background-img bg-cover">
            {/* Placeholder for Chart */}
            <p className="text-pink-500">Chart goes here</p>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <p>Add a new user</p>
            <button className="py-2 px-4 bg-pink-500 text-white rounded-lg">
              Add User
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <p>Add a new user</p>
            <button className="py-2 px-4 bg-pink-500 text-white rounded-lg">
              Add User
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <p>Add a new user</p>
            <button className="py-2 px-4 bg-pink-500 text-white rounded-lg">
              Add User
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;

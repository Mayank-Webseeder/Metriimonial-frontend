// File: src/App.jsx
import React from "react";
import { Link } from "react-router-dom";
import { TiUserAdd } from "react-icons/ti";

const SubAdminUser = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold ml-7">Logo</h1>
          <nav className="space-x-4 mr-[32px]">
            <Link to="#" className="hover:underline">
              Home
            </Link>
            <Link to="#" className="hover:underline">
              About
            </Link>
            <Link to="#" className="hover:underline">
              Search
            </Link>
            <Link to="#" className="hover:underline">
              Contacts
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto  bg-[#a8d5e5]">
        <div className="flex flex-col lg:flex-row">
          {/* Search Section */}
          <div className="bg-[#eff6f9] shadow-lg p-6 mx-auto  rounded-lg lg:w-2/3">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              Add Sub Admin <span className="ml-[7px]"><TiUserAdd /></span>
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium">User Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-gray-300 rounded-[25px] p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <label className="block font-medium">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  className="w-full border-gray-300 rounded-[25px] p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />

                <label className="block font-medium">Contact Number:</label>
                <div className="flex space-x-2">
                  <select
                    className="w-1/4 bg-slate-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  > 
                  <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (Australia)</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    className="w-3/4 border-gray-300 rounded-[25px] p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <label className="block font-medium">Gender:</label>
                <div className="space-x-4">
                  <label>
                    <input type="radio" className="rounded-[25px]" name="gender" value="Groom" />
                    <span className="ml-2">Groom</span>
                  </label>
                  <label>
                    <input type="radio" name="gender" className="rounded-[25px]" value="Bride" />
                    <span className="ml-2">Bride</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-medium">Marital Status:</label>
                <div className="space-x-4">
                  <label>
                    <input type="checkbox" className="rounded-[25px]" value="Single" />
                    <span className="ml-2">Single</span>
                  </label>
                  <label>
                    <input type="checkbox" value="Divorced" />
                    <span className="ml-2">Divorced</span>
                  </label>
                  <label>
                    <input type="checkbox" value="Widowed" />
                    <span className="ml-2">Widowed</span>
                  </label>
                  <label>
                    <input type="checkbox" value="Separated" />
                    <span className="ml-2">Separated</span>
                  </label>
                  <label>
                    <input type="checkbox" value="Any" />
                    <span className="ml-2">Any</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium">Country:</label>
                  <select className="w-full border-gray-300 rounded">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">District / City:</label>
                  <select className="w-full border-gray-300 rounded">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">State:</label>
                  <select className="w-full border-gray-300 rounded">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">Religion:</label>
                  <select className="w-full border-gray-300 rounded">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">Mother Tongue:</label>
                  <select className="w-full border-gray-300 rounded">
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <label className="block font-medium">Age:</label>
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full border-gray-300 rounded-[25px]"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">To:</label>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full border-gray-300 rounded-[25px]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Create 
              </button>
            </form>
          </div>

          {/* Sidebar */}
          {/* <aside className="lg:w-1/3 mt-8 lg:mt-0 lg:ml-6">
            <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Happy Marriage</h3>
              <img
                src="https://img.freepik.com/free-photo/bride-with-roses-groom-with-balloons_329181-19327.jpg"
                alt="Happy Marriage"
                className="rounded mb-4"
              />
              <p>
                John & Mary: It is a long established fact that a reader will be
                distracted by the readable.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">View Recent Profiles</h3>
              <ul>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-red-600 hover:underline"
                  >
                    Bucky Bucky, 31 Yrs, Christian
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-red-600 hover:underline"
                  >
                    Jane Doe, 29 Yrs, Hindu
                  </Link>
                </li>
              </ul>
            </div>
          </aside> */}
        </div>
      </div>
    </div>
  );
};

export default SubAdminUser;

import React from "react";
import { TiUserAdd } from "react-icons/ti";

const SubAdminUser = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Main Content */}
      <div className="ml-60 w-full bg-[#a8d5e5] p-4">
        <div className="container mx-auto">
          <div className="bg-[#eff6f9] shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              Add Sub Admin <span className="ml-2"><TiUserAdd /></span>
            </h2>
            <form className="space-y-6">
              {/* User Name */}
              <div>
                <label className="block font-medium mb-1">User Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-gray-300 rounded-[25px] p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  className="w-full border-gray-300 rounded-[25px] p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block font-medium mb-1">Contact Number:</label>
                <div className="flex space-x-2">
                  <select
                    className="w-1/4 bg-slate-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  >
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (Australia)</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    className="w-3/4 border-gray-300 rounded-[25px] p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block font-medium mb-1">Gender:</label>
                <div className="space-x-4">
                  <label>
                    <input type="radio" name="gender" value="Groom" />
                    <span className="ml-2">Groom</span>
                  </label>
                  <label>
                    <input type="radio" name="gender" value="Bride" />
                    <span className="ml-2">Bride</span>
                  </label>
                </div>
              </div>

              {/* Marital Status */}
              <div>
                <label className="block font-medium mb-1">Marital Status:</label>
                <div className="space-x-4">
                  <label>
                    <input type="checkbox" value="Single" />
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

              {/* Other Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Country:</label>
                  <select className="w-full border-gray-300 rounded p-2">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">District / City:</label>
                  <select className="w-full border-gray-300 rounded p-2">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">State:</label>
                  <select className="w-full border-gray-300 rounded p-2">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Religion:</label>
                  <select className="w-full border-gray-300 rounded p-2">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Mother Tongue:</label>
                  <select className="w-full border-gray-300 rounded p-2">
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <label className="block font-medium mb-1">Age:</label>
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full border-gray-300 rounded-[25px] p-2"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">To:</label>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full border-gray-300 rounded-[25px] p-2"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminUser;

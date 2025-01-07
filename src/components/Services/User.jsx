// File: src/components/PanditDetailsForm.js
import React from "react";

const User = () => {
  return (
    <div className="bg-red-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">User Details Form</h1>

        <form>
          {/* Name and Contact Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact No.</label>
              <input
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter contact number"
              />
            </div>
          </div>

          {/* Sub Caste and City/Village */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sub Caste</label>
              <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Select Sub Caste</option>
                <option>Sub Caste 1</option>
                <option>Sub Caste 2</option>
                <option>Sub Caste 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City/Village</label>
              <input
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter city or village"
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Select State</option>
                <option>State 1</option>
                <option>State 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
              <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Select District</option>
                <option>District 1</option>
                <option>District 2</option>
              </select>
            </div>
          </div>

          {/* Aadhaar Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar No (Optional)</label>
              <input
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Aadhaar number"
              />
            </div>
          </div>

          {/* Registering For */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              You are Registering for:
            </label>
            <div className="flex space-x-4">
              {['Pandit', 'Jyotish', 'Kathavachak'].map((role) => (
                <label key={role} className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2">{role}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;

// File: src/components/PanditDetailsForm.js
import React from "react";

const User  = () => {
  return (
    <div className="bg-red-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">User Details Form</h1>

        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact No.
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter contact number"
            />
          </div>

          {/* Sub Caste */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sub Caste
            </label>
            <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option>Select Sub Caste</option>
              <option>Sub Caste 1</option>
              <option>Sub Caste 2</option>
              <option>Sub Caste 3</option>
            </select>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Select State</option>
                <option>State 1</option>
                <option>State 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                District
              </label>
              <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Select District</option>
                <option>District 1</option>
                <option>District 2</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City/Village
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter city or village"
            />
          </div>

          {/* Aadhaar No */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Aadhaar No (Optional)
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Aadhaar number"
            />
          </div>

          {/* Registering For */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              You are Registering for:
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">Pandit</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">Jyotish</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">Kathavachak</span>
              </label>
            </div>
          </div>

          {/* Services */}
          {/* <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pandit Services:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Ganesh Pujan",
                "Ganesh Sthapana",
                "GrahaPravesh Pujan",
                "Rudrabhishek",
                "Havan",
                "Mahamrutyunjay Jaap",
                "Marriage",
                "Satyanarayan Pujan",
                "Navgrah Shanti Pujan",
                "Namkaran Sanskar",
                "New Business Opening Pujan",
                "New Vehicle Pujan",
                "Maa Lakshmi Pujan",
              ].map((service, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2">{service}</span>
                </label>
              ))}
            </div>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;

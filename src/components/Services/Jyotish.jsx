// File: src/components/PanditDetailsPage.js
import React from "react";

const Jyotish = () => {
  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center py-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Jyotish Services
        </h1>

        <form>
          {/* Personal Details */}
          {/* <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>
          </div> */}

          {/* Jyotish Services */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Jyotish Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Janam Kundli Making",
                "Kundali Milan",
                "Vastu Consultant",
                "Career Astrology",
                "Marriage Astrology",
                "Business Astrology",
                "Palm Reading",
                "Face Reading",
                "Tarot Astrology",
                "Nadi Reading",
                "Medical Astrology",
                "Love Problem Astrology",
              ].map((service, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2">{service}</span>
                </label>
              ))}
            </div>
          </div>

         

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-900 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jyotish;

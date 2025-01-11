import React from "react";

const KathavachakPravakta = () => {
  return (
    <>
      <div className="min-h-screen bg-red-200 flex items-center justify-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Kathavachak Pravakt Services:
          </h1>

          <form>
            {/* Kathavachak Services Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Select Kathavachak Pravakt Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Sat Sang",
                  "Shri Hari Katha",
                  "Nami Bai ka Mayra",
                  "Sundar Kaand",
                  "Bhajan Sandhya",
                ].map((service, index) => (
                  <label
                    key={index}
                    className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 h-5 w-5"
                    />
                    <span className="ml-3 text-gray-800 text-sm font-medium">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-900 text-white py-2 px-8 rounded-lg hover:bg-red-500 transition mr-[68px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default KathavachakPravakta;

import React, { useState } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    mobileNo: "",
    dob: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API call here to update the profile
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Container */}
      <div className="w-full max-w-lg bg-white rounded-md shadow-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-[#762140] text-2xl"
          >
            ←
          </button>
          <h2 className="text-xl font-bold text-[#762140]">Update Profile</h2>
          <div></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-[#762140] focus:border-[#762140]"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobileNo"
              className="block text-sm font-semibold text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-[#762140] focus:border-[#762140]"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-semibold text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-[#762140] focus:border-[#762140]"
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-[#762140] focus:border-[#762140]"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Gender
            </label>
            <div className="flex space-x-4 mt-2">
              {["Male", "Female", "Other"].map((gender) => (
                <label
                  key={gender}
                  className={`flex items-center justify-center border rounded-md py-2 px-4 cursor-pointer ${
                    formData.gender === gender
                      ? "bg-[#762140] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#762140] text-white font-semibold py-2 rounded-md hover:bg-[#631c37]"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

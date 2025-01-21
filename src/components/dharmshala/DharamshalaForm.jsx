import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DharamshalaForm = () => {
  const [formData, setFormData] = useState({
    dharamsalaName: '',
    subCasteName: '',
    city: '',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center mb-4">
          <Link to='/dharm-shala'><button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button></Link>
          <h1 className="text-xl font-semibold ml-2">Dharmshala</h1>
        </div>

        <h2 className="text-[#932439] font-medium mb-4">Upload Your Dharamsala Details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Dharamsala Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="dharamsalaName"
              placeholder="Enter Dharamsala Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#932439] focus:border-transparent"
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Sub-Caste Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subCasteName"
              placeholder="Enter Sub-Caste Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#932439] focus:border-transparent"
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#932439] focus:border-transparent"
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              name="description"
              placeholder="Enter Description"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#932439] focus:border-transparent"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Upload Dharamsala Image <span className="text-red-500">*</span>
            </label>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">No file chosen</span>
              <button
                type="button"
                onClick={() => document.getElementById('imageInput').click()}
                className="bg-[#932439] text-white px-4 py-2 rounded-lg hover:bg-[#7d1e31] transition-colors"
              >
                Upload Image
              </button>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#932439] text-white py-3 rounded-lg hover:bg-[#7d1e31] transition-colors mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DharamshalaForm;

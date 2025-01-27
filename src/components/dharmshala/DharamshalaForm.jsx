import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const DharamshalaForm = () => {
  const [formData, setFormData] = useState({
    dharamsalaName: "",
    subCasteName: "",
    city: "",
    description: "",
    image: null,
  });

  const [fileName, setFileName] = useState("No file chosen");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors for the field
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
    setFileName(file ? file.name : "No file chosen");
    setErrors({ ...errors, image: "" }); // Clear error for image upload
  };

  const handleDeleteImage = () => {
    setFormData({
      ...formData,
      image: null,
    });
    setFileName("No file chosen");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.dharamsalaName.trim()) {
      newErrors.dharamsalaName = "Dharamsala Name is required.";
      isValid = false;
    }
    if (!formData.subCasteName.trim()) {
      newErrors.subCasteName = "Sub-Caste Name is required.";
      isValid = false;
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
      isValid = false;
    }
    if (!formData.image) {
      newErrors.image = "Dharamsala Image is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center mb-4">
          <Link to="/dharm-shala">
            <button className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </Link>
          <h1 className="text-xl font-semibold ml-2">Dharmshala</h1>
        </div>

        <h2 className="text-[#932439] font-medium mb-4">
          Upload Your Dharamsala Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dharamsala Name */}
          <div>
            <label className="block text-gray-700 mb-2">
              Dharamsala Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="dharamsalaName"
              placeholder="Enter Dharamsala Name"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#932439] ${
                errors.dharamsalaName ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleInputChange}
            />
            {errors.dharamsalaName && (
              <p className="text-red-500 text-sm">{errors.dharamsalaName}</p>
            )}
          </div>

          {/* Sub-Caste Name */}
          <div>
            <label className="block text-gray-700 mb-2">
              Sub-Caste Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subCasteName"
              placeholder="Enter Sub-Caste Name"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#932439] ${
                errors.subCasteName ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleInputChange}
            />
            {errors.subCasteName && (
              <p className="text-red-500 text-sm">{errors.subCasteName}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#932439] ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleInputChange}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          {/* Description */}
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

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-2">
              Upload Dharamsala Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-between">
              <span
                className={`text-sm ${
                  errors.image ? "text-red-500" : "text-gray-500"
                }`}
              >
                {fileName}
              </span>
              <div className="flex items-center space-x-2">
                {formData.image && (
                  <button
                    type="button"
                    onClick={handleDeleteImage}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <FaTrash />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => document.getElementById("imageInput").click()}
                  className="bg-[#932439] text-white px-4 py-2 rounded-lg hover:bg-[#7d1e31] transition-colors"
                >
                  Upload Image
                </button>
              </div>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </div>

          {/* Submit Button */}
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

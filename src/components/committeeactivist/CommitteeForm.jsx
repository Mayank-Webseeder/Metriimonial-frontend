import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CommitteeForm = () => {
  const [formData, setFormData] = useState({
    committeeName: "",
    subCasteName: "",
    city: "",
    area: "",
    committeeImage: null,
  });

  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors as user types
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, committeeImage: e.target.files[0] });
    setErrors({ ...errors, committeeImage: "" }); // Clear error for image upload
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.committeeName.trim()) {
      newErrors.committeeName = "Committee Name is required.";
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
    if (!formData.area.trim()) {
      newErrors.area = "Area is required.";
      isValid = false;
    }
    if (!formData.committeeImage) {
      newErrors.committeeImage = "Committee Image is required.";
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
      navigate("/committee-activist");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Committee Heading and SVG Icon in the same line */}
        <div className="flex items-center mb-4">
          <Link to="/committee-activist">
            <button className="text-[#762140] mt-2 text-[#762140]">
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
          <h1 className="text-2xl font-bold text-[#762140] mr-2">Committee</h1>
        </div>

        <h2 className="text-lg font-semibold text-[#762140] mb-6">
          Upload Committee Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Committee Name *</label>
            <input
              type="text"
              name="committeeName"
              value={formData.committeeName}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 ${
                errors.committeeName ? "border-red-500" : ""
              }`}
              placeholder="Enter Committee Name"
            />
            {errors.committeeName && (
              <p className="text-red-500 text-sm">{errors.committeeName}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Sub-Caste Name *</label>
            <input
              type="text"
              name="subCasteName"
              value={formData.subCasteName}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 ${
                errors.subCasteName ? "border-red-500" : ""
              }`}
              placeholder="Enter Sub-Caste Name"
            />
            {errors.subCasteName && (
              <p className="text-red-500 text-sm">{errors.subCasteName}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 ${
                errors.city ? "border-red-500" : ""
              }`}
              placeholder="Enter City"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <div>
            <label className="block mb-1">Area *</label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 ${
                errors.area ? "border-red-500" : ""
              }`}
              placeholder="Enter Area"
            />
            {errors.area && <p className="text-red-500 text-sm">{errors.area}</p>}
          </div>
          <div>
            <label className="block mb-1">Upload Your Committee Image *</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={`w-full border rounded-lg p-2 ${
                errors.committeeImage ? "border-red-500" : ""
              }`}
            />
            {errors.committeeImage && (
              <p className="text-red-500 text-sm">{errors.committeeImage}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full text-white p-3 rounded-lg bg-[#762140] hover:bg-[#631c37]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommitteeForm;

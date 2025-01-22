import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    mobileNo: "",
    gender: "",
    password: "",
    confirmPassword: "",
    otp: "",
    dob: "",
    city: "",
    photo: null, // Added for photo upload
  });
  const [photoPreview, setPhotoPreview] = useState(null); // Preview of the uploaded image
  const [message, setMessage] = useState(null);
  const [mobileError, setMobileError] = useState("");

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation for mobile number
    if (name === "mobileNo") {
      if (!/^\d{10}$/.test(value)) {
        setMobileError("Enter a valid 10-digit mobile number");
      } else {
        setMobileError("");
      }
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      setPhotoPreview(URL.createObjectURL(file)); // Generate a preview URL for the image
    }
  };

  const handleDeletePhoto = () => {
    setFormData((prev) => ({ ...prev, photo: null }));
    setPhotoPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData; // Exclude confirmPassword
      const formDataToSend = new FormData();
      Object.keys(dataToSend).forEach((key) => {
        if (dataToSend[key]) {
          formDataToSend.append(key, dataToSend[key]);
        }
      });

      const response = await axios.post(
        "https://api-matrimonial.webseeder.tech/api/v1/user/signUp",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage({
        type: "success",
        text: response.data.message || "Signup successful!",
      });
      setFormData({
        username: "",
        mobileNo: "",
        gender: "",
        password: "",
        confirmPassword: "",
        otp: "",
        dob: "",
        city: "",
        photo: null,
      });
      setPhotoPreview(null);
      navigate("/login");
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Signup failed!",
      });
    }
  };

  return (
    <div
      className="signup-form bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-photo/designer-wedding-rings-corner-on-260nw-741451888.jpg')`,
      }}
    >
      <div className="max-w-md mx-auto bg-white bg-opacity-20 rounded-lg overflow-hidden md:max-w-lg shadow-lg">
        <div className="md:flex">
          <div className="w-full p-2">
            <h3 className="text-2xl text-gray-900 font-semibold text-center mb-4">
              Sign Up
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Name and City Side by Side */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="mt-2">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {mobileError && (
                  <p className="text-red-600 text-sm mt-1">{mobileError}</p>
                )}
              </div>

              {/* Password and Confirm Password */}
              <div className="flex gap-4 mt-2">
                <div className="w-1/2">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block  text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>

              {/* Gender and DOB */}
              <div className="flex gap-4 mt-2">
                <div className="w-1/2">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>

              {/* Photo Upload */}

              <div className="mt-4">
                <label className="block colour-[#7F7F7F]" htmlFor="photoInput">Upload Picture</label>
                <input
                placeholder="Upload Picture"
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  className="mt-1 p-2 w-full border rounded-md"
                  onChange={handlePhotoUpload}
                />
                {photoPreview && (
                  <div className="mt-2 flex items-center gap-4">
                    <img
                      src={photoPreview}
                      alt="Uploaded Preview"
                      className="w-12 h-10 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={handleDeletePhoto}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-trash-alt"></i><FaTrash/>
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-900 text-white p-2 hover:bg-red-700 rounded-md mt-4"
              >
                Register
              </button>
            </form>

            {/* Message Display */}
            {message && (
              <div
                className={`mt-4 p-2 text-center ${
                  message.type === "success"
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                }`}
              >
                {message.text}
              </div>
            )}

            {/* Redirect to Login */}
            <div className="mt-2 text-center">
              <p className="text-sm text-white-900">
                <b>
                  Have an account?{" "}
                  <Link to="/login" className="text-indigo-600 hover:underline">
                    Login Here
                  </Link>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

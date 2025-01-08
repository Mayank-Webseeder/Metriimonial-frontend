import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [userData, setUserData] = useState({
    mobileNo: "",
    username: "",
    dob: "",
    city: "",
    gender: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [mobileError, setMobileError] = useState('');
  const [loading, setLoading] = useState(false); // Loader state

 // Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setUserData((prev) => ({ ...prev, [name]: value }));

  // Real-time validation for mobile number
  if (name === 'mobileNo') {
    if (!/^\d{10}$/.test(value)) {
      setMobileError('Enter a valid 10-digit mobile number');
    } else {
      setMobileError('');
    }
  }
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Check if passwords match
  if (userData.password !== userData.confirmPassword) {
    setMessage({ type: 'error', text: 'Passwords do not match!' });
    return;
  }

  try {
    const { confirmPassword, ...dataToSend } = userData; // Exclude confirmPassword
    const response = await axios.post(
      'http://localhost:3600/api/v1/user/signUp',
      dataToSend
    );
    setMessage({
      type: 'success',
      text: response.data.message || 'Signup successful!',
    });

    // Reset form
    setUserData({
      username: '',   
      mobileNo: '',
      gender: '',
      password: '',
      confirmPassword: '',
      dob: '',
      city: '',
    });
  } catch (error) {
    setMessage({
      type: 'error',
      text: error.response?.data?.message || 'Signup failed!',
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
                    value={userData.username}
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
                    value={userData.city}
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
                  value={userData.mobileNo}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {mobileError && (
                  <p className="text-red-600 text-sm mt-1">{mobileError}</p>
                )}
                {loading && (
                  <p className="text-blue-600 text-sm mt-1">Sending OTP...</p>
                )}
              </div>

              {/* OTP Field */}
              <div className="mt-2">
                <label className="block text-gray-700">OTP</label>
                <input
                  type="text"
                  name="otp"
                  value={userData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              {/* Password and Confirm Password */}
              <div className="flex gap-4 mt-2">
                <div className="w-1/2">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={userData.confirmPassword}
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
                    value={userData.gender}
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
                    value={userData.dob}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
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
                  message.type === 'success'
                    ? 'text-green-700 bg-green-100'
                    : 'text-red-700 bg-red-100'
                }`}
              >
                {message.text}
              </div>
            )}

            {/* Redirect to Login */}
            <div className="mt-2 text-center">
              <p className="text-sm text-white-900">
                <b>
                  Have an account?{' '}
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

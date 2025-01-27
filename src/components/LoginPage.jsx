import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ number: "", password: "" });
  const [errors, setErrors] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const goSignup = () => {
    navigate("/signup");
  };

  const validateForm = () => {
    if (!formData.number || !/^\d{10}$/.test(formData.number)) {
      setErrors("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setErrors("Password must be at least 6 characters long.");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://api-matrimonial.webseeder.tech/api/v1/user/signIn",
          {
            mobileNo: formData.number,
            password: formData.password,
          }
        );

        if (response.data.status) {
          // Store the entire response or specific fields in localStorage
          localStorage.setItem("authToken", response.data.user.token);
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("userInfo", JSON.stringify(response.data.user));
          localStorage.setItem("message", response.data.message);
          console.log(response.data.user.token);
          // Redirect to the desired page
          navigate("/user-data");
        } else {
          setErrors(
            response.data.message || "Invalid mobile number or password."
          );
        }
      } catch (error) {
        setErrors(
          error.response?.data?.message ||
            "An error occurred while logging in. Please try again."
        );
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-left bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5d41bea6d5441800011a993e/1709036602420-44RDKOR6QV4EUJ5RLKYC/bride-groom-archway-beach-romantic-destination-wedding-anniversary-background.jpg')`,
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-5 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome Back!
        </h2>
        <p className="text-center text-white-900 mb-6">Log in to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {errors && <p className="text-red-500 text-sm">{errors}</p>}

          <button
            type="submit"
            className="w-full bg-red-900 text-white py-3 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-white-900">
            <b>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 hover:underline"
                onClick={goSignup}
              >
                Sign Up
              </Link>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

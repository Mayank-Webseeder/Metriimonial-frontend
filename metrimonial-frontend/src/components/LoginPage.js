import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const goSignup = () => {
    navigate("/signup");
  };

  const validateForm = () => {
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors("Please enter a valid email address.");
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setErrors("Password must be at least 6 characters long.");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Hardcoded admin and user credentials
      // const adminCredentials = { email: "admin@example.com", password: "admin123" };
      // const userCredentials = { email: "user@example.com", password: "user123" };

      // Check if the email and password match the hardcoded admin or user credentials
    //   if (
    //     formData.email === adminCredentials.email &&
    //     formData.password === adminCredentials.password
    //   ) {
    //     localStorage.setItem("role", "admin"); // Store role as admin
    //     navigate("/admin-dashboard"); // Redirect to admin dashboard
    //   } else if (
    //     formData.email === userCredentials.email &&
    //     formData.password === userCredentials.password
    //   ) {
    //     localStorage.setItem("role", "user"); // Store role as user
    //     navigate("/user-data"); // Redirect to user data page
    //   } else {
    //     setErrors("Invalid email or password.");
    //   }
    // }
     
  }
  localStorage.setItem("loggedIn", true); // Store logged-in status
  localStorage.setItem("userinfo", JSON.stringify(formData)); // Optionally store user data
  navigate("/user-data"); // Redirect to user-data page
  }
  ;

  return (
    <div
      className="min-h-screen flex items-center justify-left bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5d41bea6d5441800011a993e/1709036602420-44RDKOR6QV4EUJ5RLKYC/bride-groom-archway-beach-romantic-destination-wedding-anniversary-background.jpg')`,
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-5 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome Back!</h2>
        <p className="text-center text-white-900 mb-6">Log in to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {errors && <p className="text-red-500 text-sm">{errors}</p>}

          {/* Submit Button */}
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
              <a
                href="/signup"
                className="text-indigo-600 hover:underline"
                onClick={goSignup}
              >
                Sign Up
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

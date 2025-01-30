import React, { useEffect, useState } from "react";
import LoginCarousel from "../components/carousel/LoginCarousel";
import "./login.css";
import logo from ".././assets/metrimonial.png";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  return (
    <div className="w-full h-screen grid grid-cols-3">
      <LoginCarousel />
      <LoginForm />
    </div>
  );
};

export default Login;

const LoginForm = () => {
  const [formData, setFormData] = useState({ number: "", password: "" });
  const [errors, setErrors] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "password"
          ? value.charAt(0).toUpperCase() + value.slice(1)
          : value,
    });
  };

  const validateForm = () => {
    if (!formData.number || !/^\d{10}$/.test(formData.number)) {
      setErrors("Please enter a valid 10-digit mobile number");
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setErrors("Password must be at least 6 characters long");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://api-matrimonial.webseeder.tech/api/v1/user/signIn",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mobileNo: formData.number,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        if (data.status) {
          localStorage.setItem("authToken", data.user.token);
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("userInfo", JSON.stringify(data.user));
          localStorage.setItem("message", data.message);
          navigate("/");
        } else {
          setErrors(data.message || "Invalid mobile number or password");
        }
      } catch (error) {
        setErrors("An error occurred while logging in. Please try again");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {errors && (
        <div className="text-sm text-red-600 text-center">{errors}</div>
      )}

      <div className="h-full w-full col-span-1 flex flex-col justify-center items-start px-8 text-[#203d5d]">
        {/* <img src={logo} alt="Logo" /> */}
        <form className="space-y-6 w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Mobile Number Field */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your mobile number"
              required
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          {/* Password Field with Show/Hide Icon */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 text-xl right-0 pr-3 flex justify-center items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </span>
            </div>
            <a href="#" className="text-right w-full inline-block">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#203d5d] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

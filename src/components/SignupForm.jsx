import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";

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
    photo: null,
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [message, setMessage] = useState(null);
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation for mobile number
    if (name === "mobileNo") {
      if (!/^\d{10}$/.test(value)) {
        setMobileError("Enter a valid 10-digit mobile number");
      } else {
        setMobileError("");
      }
    }

    // Validation for password
    if (name === "password") {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError(
          "Password must be Strong, include uppercase,special character and numbers."
        );
      } else {
        setPasswordError("");
      }
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      setPhotoPreview(URL.createObjectURL(file));
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

    if (mobileError || passwordError) {
      setMessage({
        type: "error",
        text: "Please fix the errors before submitting.",
      });
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData;
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
      className="signup-form bg-cover bg-center h-screen flex items-center justify-center"
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
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
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
                    required
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {mobileError && (
                  <p className="text-red-600 text-sm mt-1">{mobileError}</p>
                )}
              </div>

              <div className="flex gap-4 mt-2">
                <div className="w-1/2 relative">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEye /> :<FaEyeSlash />  }
                  </span>
                  {passwordError && (
                    <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                  )}
                </div>
                <div className="w-1/2 relative">
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <div className="w-1/2">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
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
                    required
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" htmlFor="photoInput">
                  Upload Picture
                </label>
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  className="mt-1 p-2 w-full border rounded-md"
                  onChange={handlePhotoUpload}
                  required
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
                      <FaTrash />
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-900 text-white p-2 hover:bg-red-700 rounded-md mt-4"
              >
                Register
              </button>
            </form>

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

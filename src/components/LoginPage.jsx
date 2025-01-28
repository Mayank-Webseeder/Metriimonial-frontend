import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ number: "", password: "" });
  const [errors, setErrors] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          navigate("/user-data");
        } else {
          setErrors(data.message || "Invalid mobile number or password");
        }
      } catch (error) {
        setErrors("An error occurred while logging in. Please try again");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm p-8 space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-medium tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500">
            Enter your details to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Mobile number
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm shadow-sm placeholder:text-slate-400
                         focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm shadow-sm placeholder:text-slate-400
                           focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {errors && (
            <p className="text-sm text-red-600 text-center">{errors}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

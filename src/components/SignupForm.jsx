// src/components/SignupForm.js
import React from 'react';
// import './SignupForm.css'; // Assuming you have additional custom styles

const SignupForm = () => {
  return (
    <div className="signup-form bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://www.shutterstock.com/image-photo/designer-wedding-rings-corner-on-260nw-741451888.jpg')` }}>
      <div className="max-w-md mx-auto bg-white bg-opacity-20 rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-3">
            <h3 className="text-2xl text-gray-900 font-semibold text-center">Sign Up</h3>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" placeholder="Enter your name" className="mt-1 p-2 w-full border rounded-md"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" placeholder="Enter your email" className="mt-1 p-2 w-full border rounded-md"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" placeholder="Create a password" className="mt-1 p-2 w-full border rounded-md"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="mt-1 p-2 w-full border rounded-md"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select className="mt-1 p-2 w-full border rounded-md">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 ">Date of Birth</label>
                <input type="date" className="mt-1 p-2 w-full border rounded-md"/>
              </div>
              <button type="submit" className="w-full bg-red-900 text-white p-3 hover:bg-red-700 rounded-md">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

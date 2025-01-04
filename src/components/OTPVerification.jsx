// src/components/OTPVerification.jsx
import React from 'react';
import '../index.css';
const OTPVerification = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover background">
      <div className="bg-white otp-page rounded-lg shadow-md p-6 w-96 relative overflow-hidden">
        {/* Curved Background */}
        <div className="absolute top-0 left-0 w-full h-24 bg-cover bg-no-repeat rounded-t-lg"></div>

        <div className="mt-20 text-center bg-white otp-page shadow-lg otp-page">
          <h2 className="text-xl font-bold text-black-900">Verification Code</h2>
          <p className="text-black-900 font-bold mt-2 text-sm">We have sent the verification code to your email address</p>

          {/* OTP Input */}
          <div className="flex justify-center space-x-4 mt-6">
            {[0, 1, 2, 3].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 border-2 border-gray-300 text-center text-xl font-medium rounded-lg focus:outline-none focus:border-purple-500"
              />
            ))}
          </div>

          {/* Confirm Button */}
          <button
            className="mt-8 w-full py-3 text-white bg-red-900 hover:bg-red-600 rounded-lg text-sm font-semibold transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;

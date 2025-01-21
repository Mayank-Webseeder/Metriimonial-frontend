// // File: src/components/PanditDetailsForm.js
// import React from "react";

// const User = () => {
//   return (
//     <div className="bg-red-200 min-h-screen flex items-center justify-center p-6">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">User Details Form</h1>

//         <form>
//           {/* Name and Contact Number */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//               <input
//                 type="text"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Contact No.</label>
//               <input
//                 type="text"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter contact number"
//               />
//             </div>
//           </div>

//           {/* Sub Caste and City/Village */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Sub Caste</label>
//               <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
//                 <option>Select Sub Caste</option>
//                 <option>Sub Caste 1</option>
//                 <option>Sub Caste 2</option>
//                 <option>Sub Caste 3</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">City/Village</label>
//               <input
//                 type="text"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter city or village"
//               />
//             </div>
//           </div>

//           {/* Address Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
//               <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
//                 <option>Select State</option>
//                 <option>State 1</option>
//                 <option>State 2</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
//               <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
//                 <option>Select District</option>
//                 <option>District 1</option>
//                 <option>District 2</option>
//               </select>
//             </div>
//           </div>

//           {/* Aadhaar Number */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar No (Optional)</label>
//               <input
//                 type="text"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter Aadhaar number"
//               />
//             </div>
//           </div>

//           {/* Registering For */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               You are Registering for:
//             </label>
//             <div className="flex space-x-4">
//               {['Pandit', 'Jyotish', 'Kathavachak'].map((role) => (
//                 <label key={role} className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox text-blue-600" />
//                   <span className="ml-2">{role}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition"
//           >
//             Next
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default User;

// User.js (Component)
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../../redux/commonform/Commonfromslice';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedFormData = useSelector((state) => state.commonform.userDetails); 

  const [formData, setFormData] = useState(storedFormData);

  useEffect(() => {
    setFormData(storedFormData);
  }, [storedFormData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceTypeChange = (type) => {
    setFormData({
      ...formData,
      serviceType: type
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserDetails(formData));

    switch(formData.serviceType) {
      case "Pandit":
        navigate("/user-form/pandit-services");
        break;
      case "Jyotish":
        navigate("/user-form/jyotish-services");
        break;
      case "Kathavachak":
        navigate("/user-form/kathavachak-services");
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-80 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">User Register Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Name and Contact Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact No.</label>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Sub Caste and City/Village */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sub Caste</label>
              <input
                type="text"
                name="subCaste"
                value={formData.subCaste}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City/Village</label>
              <input
                type="text"
                name="cityVillage"
                value={formData.cityVillage}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Aadhaar Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar No (Optional)</label>
              <input
                type="text"
                name="aadhaarNo"
                value={formData.aadhaarNo}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Service Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              You are Registering for:
            </label>
            <div className="flex space-x-4">
              {['Pandit', 'Jyotish', 'Kathavachak'].map((role) => (
                <label key={role} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="serviceType"
                    value={role}
                    checked={formData.serviceType === role}
                    onChange={() => handleServiceTypeChange(role)}
                    required
                  />
                  <span className="ml-2">{role}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#762140] text-white py-2 px-4 rounded-lg"
          >
            Next
          </button>
        </form>

        {/* Back Button
        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-lg"
        >
          Back
        </button> */}
      </div>
    </div>
  );
};

export default User;


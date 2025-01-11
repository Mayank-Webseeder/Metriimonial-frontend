// File: src/components/UploadPhotoSection.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addImages } from "../../redux/commonform/Commonfromslice";
// import { addImages } from "../redux/commonFormSlice"; 

const UploadPhoto = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);
  
  // Fetching data from Redux state
  const userDetails = useSelector((state) => state.commonForm?.userDetails || {});
  const selectedServices = useSelector((state) => state.commonForm?.selectedServices || []);
  const profileType = useSelector((state) => state.commonForm?.profileType || "");

  // Handle Back Button
  const handleBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  // Handle Photo Upload
  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);

    // Restrict to max 5 photos
    if (photos.length + files.length > 5) {
      alert("You can upload a maximum of 5 photos.");
      return;
    }

    setPhotos((prevPhotos) => [...prevPhotos, ...files]);
  };

  // Remove Photo Functionality
  const handleRemovePhoto = (index) => {
    const updatedPhotos = photos.filter((_, idx) => idx !== index);
    setPhotos(updatedPhotos);
  };

  // Handle Submit
  const handleSubmit = async () => {
    if (photos.length === 0) {
      alert("Please upload at least one photo.");
      return;
    }

    // Dispatch images to Redux state
    dispatch(addImages(photos));

    const formData = new FormData();
    formData.append("userDetails", JSON.stringify(userDetails));
    formData.append("selectedServices", JSON.stringify(selectedServices));
    formData.append("profileType", profileType);
    
    // Append each uploaded photo
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    try {
      const response = await axios.post("https://api.example.com/register-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Data submitted successfully!");
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-200">
      <div className="w-full max-w-sm mx-auto p-4">

        {/* Title */}
        <h1 className="text-[#111418] text-[22px] font-bold text-center pb-3 pt-5">
          Upload a photo
        </h1>

        {/* Description */}
        <p className="text-[#111418] text-base text-center pb-3 pt-1">
          It's easier to connect with people when you have a profile picture.
        </p>

        {/* File Upload Section */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handlePhotoUpload}
          className="block w-full text-sm text-gray-500 file:bg-red-900 file:text-white hover:file:bg-red-700"
        />

        {/* Display Uploaded Photos */}
        <div className="mt-4 space-y-2">
          {photos.map((photo, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-2 rounded-lg shadow">
              <p className="text-sm truncate">{photo.name}</p>
              <button
                onClick={() => handleRemovePhoto(index)}
                className="text-red-500 text-xs font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-3 flex-wrap px-4 py-3 mt-5">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 bg-gray-500 hover:bg-gray-700 text-white text-sm font-bold"
          >
            Back
          </button>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 bg-red-900 hover:bg-red-500 text-white text-sm font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;

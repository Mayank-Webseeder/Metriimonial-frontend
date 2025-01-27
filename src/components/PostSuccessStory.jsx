import React, { useState } from "react";

const PostSuccessStory = () => {
  const [thoughts, setThoughts] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setErrors({ ...errors, file: "" }); // Clear error for file
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!thoughts.trim()) {
      newErrors.thoughts = "Please add your thoughts.";
      isValid = false;
    }

    if (!file) {
      newErrors.file = "Please upload a couple's picture.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Thoughts:", thoughts);
      console.log("File:", file);
      alert("Success story posted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Post Your Success Story
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Share your experience in scaling
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Rating Section */}
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          {/* Thoughts Section */}
          <div>
            <textarea
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-pink-300 ${
                errors.thoughts ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Add your thoughts..."
              value={thoughts}
              onChange={(e) => {
                setThoughts(e.target.value);
                setErrors({ ...errors, thoughts: "" }); // Clear error for thoughts
              }}
            ></textarea>
            {errors.thoughts && (
              <p className="text-red-500 text-sm mt-1">{errors.thoughts}</p>
            )}
          </div>

          {/* File Upload Section */}
          <div>
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-gray-700"
            >
              Upload your one couple picture
            </label>
            <div className="mt-1 flex items-center">
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-pink-300 ${
                  errors.file ? "border-red-500" : "border-gray-300"
                }`}
                onChange={handleFileChange}
              />
            </div>
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">{errors.file}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#762140] hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Post Story
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostSuccessStory;

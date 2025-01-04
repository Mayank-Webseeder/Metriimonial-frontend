// File: src/components/UploadPhotoSection.js
import React from "react";

const UploadPhoto = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-red-200"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="w-full max-w-sm mx-auto p-4">
        {/* Title */}
        <h1 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-3 pt-5">
          Upload a photo
        </h1>

        {/* Description */}
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 text-center">
          It's easier to connect with people when you have a profile picture. You can upload a photo or take one now.
        </p>

        {/* Profile Picture Section */}
        <div className="flex items-center gap-4 bg-white px-4 py-2 min-h-14 justify-between border rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            {/* Profile Icon */}
            <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
              </svg>
            </div>
            {/* Profile Text */}
            <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
              Profile Picture
            </p>
          </div>

          {/* Camera Icon */}
          <div className="shrink-0">
            <div className="text-[#111418] flex w-7 h-7 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-3 flex-wrap px-4 py-3 mt-5">
          <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-red-900  hover:bg-red-500 text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Take Photo</span>
          </button>
          <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10  bg-red-900  hover:bg-red-500 text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Upload</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;

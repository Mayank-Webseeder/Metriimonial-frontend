// File: src/Dashboard.js

import React from "react";

const Dashboard = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#ffe6f0] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* <header className="flex items-center justify-between whitespace-nowrap   px-4 md:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-4 text-[black]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[black] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
              Admin Dashboard</h2>
            
            
          </div>
          <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-4 md:gap-9">
              <a className="text-[black] text-sm font-medium leading-normal" href="#">
                Dashboard
              </a>
              <a className="text-[black] text-sm font-medium leading-normal" href="#">
                Pandits
              </a>
              <a className="text-[black] text-sm font-medium leading-normal" href="#">
                Kathavachaks
              </a>
              <a className="text-[black] text-sm font-medium leading-normal" href="#">
                Users
              </a>
            </div>
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#ffb3c1] text-[black] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                </svg>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#ffb3c1] text-[black] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Z" />
                </svg>
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hidden sm:block"
              style={{
                backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/31c7dddb-31d0-4de3-861c-aa07de73a2d4.png')",
              }}
            ></div>
          </div>
        </header> */}
        <header className="flex items-center justify-between whitespace-nowrap px-4 md:px-6 lg:px-10 py-3">
  <div className="flex flex-1 justify-center">
    <h1 className="text-[black] text-[24px]   font-bold leading-tight tracking-[-0.015em]">
      Admin Dashboard
    </h1>
  </div>
  <div className="flex items-center gap-4 text-[black]">
    <div className="flex gap-2">
      <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#ffb3c1] text-[black] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
        </svg>
      </button>
      <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#ffb3c1] text-[black] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Z" />
        </svg>
      </button>
    </div>
    <div
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hidden sm:block"
      style={{
        backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/31c7dddb-31d0-4de3-861c-aa07de73a2d4.png')",
      }}
    ></div>
  </div>
</header>

        <div className="px-6 sm:px-6 lg:px-20 flex flex-1 justify-center py-5 ">
          <div className="layout-content-container flex flex-col w-full max-w-[960px]">
            <div className="ml-6 flex flex-wrap justify-between gap-3 p-4">
              <p className=" ml-6 text-[black] tracking-light text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight min-w-70">
                Welcome back,{}
              </p>
            </div>
            <div className="ml-6 flex flex-wrap gap-4 p-4">
              {/* Statistics Cards */}
              <div className="ml-6 flex min-w-[150px] md:min-w-[180px] flex-1 flex-col gap-2 rounded-xl p-4 sm:p-6 border border-[#ffb3c1] bg-[#ffe6f0]">
                <p className=" text-[black] text-sm sm:text-base font-medium leading-normal">
                  Users
                </p>
                <p className="text-[black] text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                  12,000
                </p>
              </div>
              <div className="flex min-w-[150px] md:min-w-[180px] flex-1 flex-col gap-2 rounded-xl p-4 sm:p-6 border border-[#ffb3c1] bg-[#ffe6f0]">
                <p className="text-[black] text-sm sm:text-base font-medium leading-normal">
                  Pandits
                </p>
                <p className="text-[black] text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                  1,200
                </p>
              </div>
              <div className="flex min-w-[150px] md:min-w-[180px] flex-1 flex-col gap-2 rounded-xl p-4 sm:p-6 border border-[#ffb3c1] bg-[#ffe6f0]">
                <p className="text-[black] text-sm sm:text-base font-medium leading-normal">
                  Kathavachaks
                </p>
                <p className="text-[black] text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                  100
                </p>
              </div>
            </div>
            <div className="ml-6 flex flex-wrap gap-4 p-4">
              {/* Recent Users Table */}
              <div className="ml-6 flex flex-col w-full rounded-xl p-4 sm:p-6 border border-[#ffb3c1] bg-[#ffe6f0]">
                <p className="text-[black] text-sm sm:text-base font-medium leading-normal">
                  Recent Users
                </p>
                <div className="overflow-x-auto rounded-lg shadow-md">
                  <table className="min-w-full table-auto text-sm sm:text-base">
                    <thead>
                      <tr className="text-left">
                        <th className="px-3 py-2">Name</th>
                        <th className="px-3 py-2">Email</th>
                        <th className="px-3 py-2">Age</th>
                        <th className="px-3 py-2">Date Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2">John Doe</td>
                        <td className="px-3 py-2">john.doe@example.com</td>
                        <td className="px-3 py-2">25</td>
                        <td className="px-3 py-2">2024-01-10</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">Jane Smith</td>
                        <td className="px-3 py-2">jane.smith@example.com</td>
                        <td className="px-3 py-2">30</td>
                        <td className="px-3 py-2">2024-01-09</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

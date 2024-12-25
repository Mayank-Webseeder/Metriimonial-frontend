import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"; // Match exact casing
import Userslide1 from "./components/Userslide1";
import Panditprofile from "./components/Panditprofile";



const App = () => {
  return (
   
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Userslide1 />} />
          {/* Additional Routes can go here */}
          <Route path="/pandit" element={<Panditprofile/>}/>
        </Routes>
      </div>
    </div>

      
   
  );
};

export default App;

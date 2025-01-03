import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"; // Match exact casing
import Userslide1 from "./components/Userslide1";
import Panditprofile from "./components/Panditprofile";
import LoginPage from "./components/LoginPage";
import OTPVerification from "./components/OTPVerification";
import SignupPage from "./components/SignupForm";
import SubAdminUser from "./components/SubAdminUser";
import Protectedroutes from "./components/Protectedroutes";
import AdminDashboard from "./components/AdminDashboard";
import Subadmis from "./components/Subadmis";
import Userprofileupdate from "./updatecomponents/Userprofileupdate";
import Panditprofileupdate from "./updatecomponents/Panditprofileupdate";
import Adduser from "./components/adduser/Adduser";


const App = () => {
  return (
   
    // <div className="flex">
    //   {/* Sidebar */}
    //   {/* <Sidebar /> */}
    //   {/* Main Content */}
    //   <div className="flex-1 p-6">
    //     <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/signup" element={<SignupPage />} />
    //     <Route path="/otp" element={<OTPVerification />} />
    //     <Route path="/subadmin" element={<SubAdminUser />} />
    //       <Route path="/user-data" element={<Userslide1 />} />
    //       {/* Additional Routes can go here */}
    //       <Route path="/pandit" element={<Panditprofile/>}/>
    //     </Routes>
    //   </div>
    // </div>

<Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OTPVerification />} />
        {/* Protected Routes */}
        <Route element={<Protectedroutes/>}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-data" element={<Userslide1/>} />
          <Route path="/pandit" element={<Panditprofile/>}/>
          <Route path="/sub-admin" element={<Subadmis/>}/>
          <Route path="add-subadmin" element={<SubAdminUser/>}/>
          <Route path="/update" element={<Userprofileupdate/>}/>
          <Route path="/update-pandit" element={<Panditprofileupdate/>}/>
          <Route path="/add-user" element={<Adduser/>}/>
          
        </Route>

        {/* Default Route (can be used to redirect users who are not authenticated) */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>

      
   
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"; // Match exact casing
import Userslide1 from "./components/Userslide1";
import Panditprofile from "./components/Panditprofile";
<<<<<<< HEAD
import LoginPage from "./components/LoginPage";
import OTPVerification from "./components/OTPVerification";
import SignupPage from "./components/SignupForm";
import SubAdminUser from "./components/SubAdminUser";
import Protectedroutes from "./services/Protectedroutes";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoutes from "./services/Protectedroutes";
import Subadmis from "./components/Subadmis";
import Userprofileupdate from "./updatecomponents/Userprofileupdate";
import Panditprofileupdate from "./updatecomponents/Panditprofileupdate";
=======

>>>>>>> parent of 8b97783 (second commit)


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
<<<<<<< HEAD
          <Route path="/sub-admin" element={<Subadmis/>}/>
          <Route path="add-subadmin" element={<SubAdminUser/>}/>
          <Route path="/update" element={<Userprofileupdate/>}/>
          <Route path="/update-pandit" element={<Panditprofileupdate/>}/>
          
        </Route>

        {/* Default Route (can be used to redirect users who are not authenticated) */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
=======
        </Routes>
      </div>
    </div>
>>>>>>> parent of 8b97783 (second commit)

      
   
  );
};

export default App;

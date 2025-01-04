import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

// const ProtectedRoutes = () => {
//   const userRole = localStorage.getItem("LoggedIn"); // Get the role from localStorage

//   return userRole?(<div className="flex"><Sidebar /><Outlet/></div>):<Navigate to="/login"/>

//   // if (!userRole) {
//   //   // If no role exists, redirect to login
//   //   return <Navigate to="/login" replace />;
//   // }

//   // return (
//   //   <div className="flex">
//   //     {/* Sidebar visible for both admin and user */}
//   //     <Sidebar />
//   //     <div className="flex-1 p-6">
//   //       {/* Check userRole and render based on role */}
//   //       {userRole === "admin" ? (
//   //         <>
//   //           {/* Admin can access both admin-dashboard and user-data */}
//   //           <Outlet />
//   //         </>
//   //       ) : userRole === "user" ? (
//   //         <>
//   //           {/* User can only access user-data (profile or other user components) */}
//   //           <Navigate to="/user-data" replace />
//   //         </>
//   //       ) : (
//   //         <Navigate to="/login" replace />
//   //       )}
//   //     </div>
//   //   </div>
//   // );
// };

// export default ProtectedRoutes;

const ProtectedRoutes = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")); // Retrieve from localStorage

  return isLoggedIn ? (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;

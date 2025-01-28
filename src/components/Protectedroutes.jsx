import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import bgimg from "../assets/free-photo-black-grunge-abstract-background-pattern-wallpaper.jpg";

const ProtectedRoutes = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")); // Retrieve from localStorage

  return isLoggedIn ? (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;

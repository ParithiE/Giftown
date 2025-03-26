import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const isAuthenticated = user ? JSON.parse(user) : null;
  const location = useLocation();

  return isAuthenticated?.token ? children : <Navigate to="/account/signin" state={{ from: location.pathname }} />;
};

export default ProtectedRoute;
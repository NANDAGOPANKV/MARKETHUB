import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
};

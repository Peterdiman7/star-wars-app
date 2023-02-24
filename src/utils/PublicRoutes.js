import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import React from "react";

const PublicRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (user) {
    return <Navigate to="/main" />;
  }

  return children;
  
};

export default PublicRoutes;

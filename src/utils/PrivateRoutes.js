import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import React from "react";

const PrivateRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
  
};

export default PrivateRoutes;

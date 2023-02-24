import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const PublicRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (user) {
    return <Navigate to="/pokemon" />;
  }

  return children;
  
};

export default PublicRoutes;

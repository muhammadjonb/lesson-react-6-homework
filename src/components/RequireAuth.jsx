import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
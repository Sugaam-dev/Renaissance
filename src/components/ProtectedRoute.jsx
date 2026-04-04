import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const storedUser = localStorage.getItem("user");

  // if no user at all → redirect
  if (!user && !storedUser) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
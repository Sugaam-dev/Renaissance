import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  const storedUser = localStorage.getItem("user");

  if (!user && !storedUser) {
    return (
      <Navigate
        to={`/auth?exam=${new URLSearchParams(location.search).get("exam") || ""}`}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
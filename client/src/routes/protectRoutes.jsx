import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn, getRole } from "../utils/auth";

const RequireAuth = ({ role }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/signin" replace />;
  }

  if (role && getRole() !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;

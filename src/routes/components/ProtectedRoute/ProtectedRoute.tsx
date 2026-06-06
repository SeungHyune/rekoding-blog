import { Navigate, Outlet, useLocation } from "react-router-dom";
import useLogin from "@/stores/useLogin/useLogin";

const ProtectedRoute = () => {
  const { isLogin } = useLogin();
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const adminUsername = localStorage.getItem("adminUsername"); 
  const AUTHORIZED_ADMIN = "rayariju2";

  return adminUsername === AUTHORIZED_ADMIN ? <Outlet /> : <Navigate to="/adlogin" />;
};

export default ProtectedRoutes;

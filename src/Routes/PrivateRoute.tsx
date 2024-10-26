import { Navigate, useLocation } from "react-router-dom";
import { message } from "antd";

interface PrivateRouteProps {
  element: JSX.Element;
  roleRequired?: string;
}

const PrivateRoute = ({ element, roleRequired }: PrivateRouteProps) => {
  const authToken = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  const location = useLocation();

  if (!authToken) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (roleRequired && userRole !== roleRequired) {
    message.error(
      "Access denied. You do not have permission to view this page."
    );
    if (userRole === "admin") {
      return <Navigate to="/home" />;
    } else if (userRole === "user") {
      return <Navigate to="/home" />;
    } else {
      return <Navigate to="/home" />;
    }
  }

  return element;
};

export default PrivateRoute;

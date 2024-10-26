import { useState, useEffect } from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    if (token && storedRole) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <>
          <Button type="primary" style={{ marginRight: "10px" }}>
            <Link to="/login">Login</Link>
          </Button>
          <Button type="default">
            <Link to="/register">Register</Link>
          </Button>
        </>
      ) : (
        <>
          {/* Sign Out button when user is logged in */}
          <Button type="primary" onClick={handleLogout}>
            Sign Out
          </Button>
        </>
      )}
    </div>
  );
};

export default Auth;

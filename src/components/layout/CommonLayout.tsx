import {
  Col,
  Layout,
  Menu,
  MenuProps,
  Row,
  Drawer,
  Button as AntdButton,
  Button,
} from "antd";
import Container from "../ui/container";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Auth from "../../pages/Authintacation/loginReg";
import { useEffect, useState } from "react";

const items: MenuProps["items"] = [
  {
    key: "home",
    label: <NavLink to="/home">Home</NavLink>,
    style: { color: "white" },
  },
  {
    key: "allproducts",
    label: <NavLink to="/allfacility">All Facilities</NavLink>,
    style: { color: "white" },
  },
  {
    key: "about",
    label: <NavLink to="/about">About Us</NavLink>,
    style: { color: "white" },
  },
  {
    key: "contact",
    label: <NavLink to="/contact">Contact Us</NavLink>,
    style: { color: "white" },
  },
];

const CommonLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<"admin" | "user" | null>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role") as "admin" | "user" | null;

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setUserRole(null);
    navigate("/home");
  };

  //Menu Troggle
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <div
        className="fixed py-4 top-0 left-0 right-0 z-50"
        style={{ background: "#4096ff" }}
      >
        <Container>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={18} lg={8} sm={19} md={9}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <NavLink to="/home">
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "white",
                      fontFamily: "serif",
                    }}
                  >
                    <span className="text-3xl">S</span>
                    portifyHub
                  </h1>
                </NavLink>
              </div>
            </Col>

            <Col xs={6} lg={0} sm={5} md={0}>
              <AntdButton
                type="primary"
                onClick={showDrawer}
                style={{ background: "black", border: "none" }}
              >
                Menu
              </AntdButton>
            </Col>

            <Col xs={0} lg={10} sm={0} md={9}>
              <Menu
                theme="dark"
                mode="horizontal"
                items={items}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "#4096ff",
                  fontWeight: "Bold",
                  fontSize: "18px",
                  border: "none",
                  fontFamily: "mono",
                }}
              />
            </Col>

            <Col xs={0} lg={5} sm={0} md={6}>
              <div className="flex justify-end gap-3 text-indigo-600 font-semibold">
                {isLoggedIn && userRole === "admin" && (
                  <NavLink to="/dashboard1" className="text-blue-500">
                    <Button className="bg-blue-700 p-2 rounded font-semibold text-white">
                      Management
                    </Button>
                  </NavLink>
                )}
                {isLoggedIn && userRole === "user" && (
                  <NavLink to="/dashboard2" className="text-blue-500">
                    <Button className="bg-blue-500 p-2 rounded font-semibold text-white">
                      Dashboard
                    </Button>
                  </NavLink>
                )}

                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="rounded bg-green-600 p-2 text-white"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Auth />
                )}
              </div>
            </Col>
            {/* djjkd */}
          </Row>
        </Container>

        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
          bodyStyle={{ padding: 0 }}
        >
          <Menu
            mode="vertical"
            items={items}
            style={{
              background: "black",
              fontWeight: "Bold",
              fontSize: "18px",
              fontFamily: "mono",
            }}
          />
          <div className="p-4">
            {isLoggedIn && userRole === "admin" && (
              <NavLink to="/dashboard1">
                <Button className="w-full bg-blue-700 text-white mb-2">
                  Management
                </Button>
              </NavLink>
            )}
            {isLoggedIn && userRole === "user" && (
              <NavLink to="/dashboard2">
                <Button className="w-full bg-blue-500 text-white mb-2">
                  Dashboard
                </Button>
              </NavLink>
            )}
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className="w-full bg-green-600 text-white"
              >
                Sign Out
              </Button>
            ) : (
              <Auth />
            )}
          </div>
        </Drawer>
      </div>

      <Container>
        <div>
          <Outlet />
        </div>
      </Container>
    </Layout>
  );
};

export default CommonLayout;

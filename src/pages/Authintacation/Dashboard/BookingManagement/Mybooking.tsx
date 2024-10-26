import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, SaveOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "antd/dist/reset.css";
import { Content, Header } from "antd/es/layout/layout";
import UserBooking from "../../../Management/Table/UserBooking";
const { Sider } = Layout;

const MyBookings: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{ padding: "16px", color: "white" }}>
          <div className="logo" style={{ padding: "16px", color: "white" }}>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SportifyHub
            </h1>
          </div>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<SaveOutlined />}>
            <NavLink to="/mybookings">My Bookings</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}></Header>

        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <UserBooking />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyBookings;

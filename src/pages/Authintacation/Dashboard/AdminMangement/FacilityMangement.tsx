import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  PlusCircleOutlined,
  BookOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "antd/dist/reset.css";
import { Content, Header } from "antd/es/layout/layout";
import TableDemo from "../../../Management/Table/TableCard";
const { Sider } = Layout;

const FacilityManagement: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          position: "fixed",
          height: "100vh",
          zIndex: 10,
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
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
          <Menu.Item key="2" icon={<EditOutlined />}>
            <NavLink to="/facility">Facility</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <NavLink to="/bookings">All Bookings</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<PlusCircleOutlined />}>
            <NavLink to="/addadmin">Add Admin</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header className="bg-white text-center">
          <h1 className="text-center font-mono font-semibold text-cyan-900 text-2xl ml-28 mt-3">
            Maintain your facilities
          </h1>
        </Header>

        <Content className="w-10/12 mx-auto ml-52 mt-8">
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <TableDemo />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FacilityManagement;

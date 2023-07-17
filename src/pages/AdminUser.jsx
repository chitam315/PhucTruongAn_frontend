import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import { listUsers } from "../mockData";
import { useNavigate } from "react-router";
import { TableUser } from "../components/TableUser";
import { useAuth } from "../components/AuthContext";


const { Header, Sider, Content } = Layout;

const AdminUser = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { user } = useAuth();

  useEffect(() => {
    if (user?.full_name != "admin") {
      navigate("/");
    }
  },[])

  const clickProduct = () => {
    navigate("/admin-page")
  }


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          // id="menuSideBarAdminPage"
          theme="dark"
          mode="inline"
          style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent" : "center", "height": "100vh","gap": "50px"}}

        // items={[
        //   {
        //     key: "1",
        //     icon: <UserOutlined />,
        //     label: "All Users",
        //   //   "data-modal-target": "modalAddProduct",
        //   //   "data-modal-toggle": "modalAddProduct"
        //   },
        //   {
        //       key: "2",
        //       label: "All Product",
        //       icon: <ProfileOutlined />,
        //       onClick: clickProduct
        //   }
        // ]}
        >
          <Button type="primary" size="large" onClick={() => navigate("/")}>
            Back to home
          </Button>
          <Button type="primary" size="large" onClick={() => navigate("/admin-page")}>
            All products
          </Button>
          <Button type="primary" size="large" onClick={() => navigate("/admin-orders")}>
            All orders
          </Button>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="flex justify-between"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="flex items-center">
            <Avatar icon={<UserOutlined />} />
            <p className="mx-3">Username</p>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <TableUser listUsers={listUsers} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminUser;

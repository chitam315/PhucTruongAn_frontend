import React, {  useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import { listCategory } from "../mockData";
import { TableProduct } from '../components/TableProduct'
import { useNavigate } from "react-router";


const { Header, Sider, Content } = Layout;

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const clickUser = () => {
    navigate("/admin-users")
    window.location.reload(false)
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          id="menuSideBarAdminPage"
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={["1"]}

          items={[
            {
              key: "1",
              icon: <PlusCircleOutlined />,
              label: "Add Product",
              "data-modal-target": "modalAddProduct",
              "data-modal-toggle": "modalAddProduct"
            },
            {
              key: "2",
              icon: <UserOutlined/>,
              label: "All Users",
              onClick: clickUser
            }
          ]}
        >

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
            <Avatar icon={<UserOutlined/>}/>
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
          <TableProduct listCategory={listCategory}/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;

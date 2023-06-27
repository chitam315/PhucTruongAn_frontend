import React, {  useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import { listCategory } from "../mockData";
import {TableCustom} from '../components/TableCustom'


const { Header, Sider, Content } = Layout;

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();




  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          id="menuSideBarAdminPage"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}

          // items={[
          //   {
          //     key: "1",
          //     icon: <UserOutlined />,
          //     label: "Product",
          //     children: [
          //       { label: "Add product" },
          //       { label: "View all product" },
          //     ],
          //   },
          // ]}
          items={[
            {
              key: "1",
              icon: <PlusCircleOutlined />,
              label: "Add Product",
              "data-modal-target": "modalAddProduct",
              "data-modal-toggle": "modalAddProduct"
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
          <TableCustom listCategory={listCategory}/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;

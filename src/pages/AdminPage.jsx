import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar, Table } from "antd";
import { listCategory } from "../mockData";

const { Header, Sider, Content } = Layout;

var dataSource = []
var index = 1

listCategory.map((category) => {
    category.listProduct.map((product) => {
        dataSource.push({
            key: index,
            category: category.category,
            name: product.name,
            price: product.price
        })
        index++
    })
})

// Sample Data for the table
// const dataSource = [
//     { key: '1', username: 'Gourav', age: 10 },
//     { key: '2', username: 'Kartik', age: 20 },
//     { key: '3', username: 'Madhu', age: 30 },
//     { key: '4', username: 'Karu', age: 40 },
//     { key: '5', username: 'Dinesh', age: 50 },
// ];

// Sample Columns data
// const columns = [
//     {
//         title: 'Username',
//         dataIndex: 'username',
//         key: 'username',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//     },
// ];
const columns = [
    {
        title: 'Number',
        dataIndex: 'key',
        key: 'key'
    },
    {
        title: 'Product name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
    },
]

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
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Product",
              children: [
                { label: "Add product" },
                { label: "View all product" },
              ],
            },
          ]}
        />
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
          <Table dataSource={dataSource} columns={columns} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;

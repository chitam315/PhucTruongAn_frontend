import React, { useEffect, useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import { useNavigate } from "react-router";
import { TableOrder } from "../components/TableOrder";
import { useAuth } from "../components/AuthContext";


const { Header, Sider, Content } = Layout;

const AdminOrder = () => {
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
    }, [])

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    // id="menuSideBarAdminPage"
                    theme="dark"
                    mode="inline"
                    style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "height": "100vh", "gap": "50px" }}

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
                    <Button type="primary" size="large" onClick={() => navigate("/admin-users")}>
                        All users
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
                    <TableOrder />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminOrder;

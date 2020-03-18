import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  PieChartOutlined
} from "@ant-design/icons";
import { withRouter, NavLink } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Index(props) {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="sm"
      >
        <div className="logo">王者荣耀管理后台</div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <NavLink to="/">
              <span>首页</span>
            </NavLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>分类管理</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <NavLink to="/createcategory">新建分类</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/categorylist">分类列表</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <TeamOutlined />
                <span>装备管理</span>
              </span>
            }
          >
            <Menu.Item key="4">
              <NavLink to="/createitem">新建装备</NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/itemlist">装备列表</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <TeamOutlined />
                <span>英雄管理</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <NavLink to="/createhero">新建英雄</NavLink>
            </Menu.Item>
            <Menu.Item key="7">
              <NavLink to="/herolist">英雄列表</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(Index);

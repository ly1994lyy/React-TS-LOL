import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  PieChartOutlined,
  LoginOutlined
} from "@ant-design/icons";
import { withRouter, NavLink } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Index(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [defaultKey] = useState(props.location.pathname);
  const [defaultKey1, setDefaultKey1] = useState(props.location.pathname);
  const [username, setUser] = useState("");
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
    console.log(props.location);
  };

  useEffect(() => {
    const user = localStorage.getItem("username");
    setUser(user);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="sm"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[`${defaultKey}`]}
          mode="inline"
          onClick={({ item, key, keyPath, selectedKeys, domEvent }) => {
            setDefaultKey1(key);
          }}
        >
          <Menu.Item key="/admin">
            <PieChartOutlined />
            <NavLink to="/admin">
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
            <Menu.Item key="/admin/createcategory">
              <NavLink to="/admin/createcategory">新建分类</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/categorylist">
              <NavLink to="/admin/categorylist">分类列表</NavLink>
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
            <Menu.Item key="/admin/createitem">
              <NavLink to="/admin/createitem">新建装备</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/itemlist">
              <NavLink to="/admin/itemlist">装备列表</NavLink>
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
            <Menu.Item key="/admin/createhero">
              <NavLink to="/admin/createhero">新建英雄</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/herolist">
              <NavLink to="/admin/herolist">英雄列表</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <TeamOutlined />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="/admin/createarticle">
              <NavLink to="/admin/createarticle">新建文章</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/articlelist">
              <NavLink to="/admin/articlelist">文章列表</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <TeamOutlined />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="/admin/createuser">
              <NavLink to="/admin/createuser">新建用户</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/userlist">
              <NavLink to="/admin/userlist">用户列表</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ textAlign: "right",paddingRight:"20px" }}>
            {username}{" "}
            <Button type="primary" size="small" icon={<LoginOutlined />} onClick={()=>{
              localStorage.removeItem('token')
              localStorage.removeItem('username')
              props.history.push('/login')
            }}>
              Logout
            </Button>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {defaultKey1.split("/", -2).map((item, index) => {
              return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
            })}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          王者荣耀管理后台 ©2020 Created by ly1994lyy
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(Index);

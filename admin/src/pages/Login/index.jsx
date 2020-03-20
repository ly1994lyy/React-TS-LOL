import React from "react";
import { Form, Input, Button,message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { userLogin } from "../../services/login";
import "./style.less";

function index(props) {
  const onFinish = async values => {
    const res = await userLogin({ ...values });
    console.log(res);
    localStorage.token = res.data.token
    message.success('登录成功！')
    props.history.push("/admin")
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <h1>王者荣耀</h1>
        </div>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default index;

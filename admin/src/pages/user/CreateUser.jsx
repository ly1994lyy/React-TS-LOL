import React from "react";
import { Form, Input, Button, message } from "antd";
import { createAdmin } from "../../services/user";
import { withRouter } from "react-router-dom";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};

function CreateUser(props) {
  const onFinish = async values => {
    const res = await createAdmin({...values});
    if (res.status === 200) {
      message.success("添加成功");
      props.history.push("/admin/userlist");
    }
  };
  
  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Input type="password" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(CreateUser);

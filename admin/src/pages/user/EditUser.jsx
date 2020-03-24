import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { getAdminByID, putAdmin, createAdmin } from "../../services/user";
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

function EditUser(props) {
  const [form] = Form.useForm();
  const onFinish = async values => {
    if (props.match.params.id) {
      const res = await putAdmin(props.match.params.id, { ...values });
      if (res.status === 200) {
        message.success("修改成功!");
        props.history.push("/admin/userlist");
      }
    } else {
      const res = await createAdmin({ ...values });
      if (res.status === 200) {
        message.success("添加成功");
        props.history.push("/admin/userlist");
      }
    }
  };

  useEffect(() => {
    if (props.match.params.id) {
      getAdminByID(props.match.params.id).then(res => {
        form.setFieldsValue({
          username: res.data.username
        });
      });
    }
  }, []);

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="密码" name="password">
        <Input type="password" disabled={props.match.params.id?true:false} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(EditUser);

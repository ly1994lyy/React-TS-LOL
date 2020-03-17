import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Select } from "antd";
import { createCategory, getCategory } from "../../services/category";
import { withRouter } from "react-router-dom";

const { Option } = Select;

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

function CreateCategory(props) {
  const [form] = Form.useForm();
  const onFinish = async values => {
    const res = await createCategory({
      name: values.name,
      parent: values.parent
    });
    message.success("添加成功");
    props.history.push("/categorylist");
  };

  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    getCategory().then(res => {
      setCateList(res.data);
    });
  },[]);
  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="上级分类"
        name="parent"
      >
        <Select placeholder="请选择上级分类">
          {cateList.map(item => {
            return (
              <Option key={item._id} value={item._id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="新建分类"
        name="name"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(CreateCategory);

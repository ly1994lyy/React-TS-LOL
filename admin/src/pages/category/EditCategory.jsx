import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Select } from "antd";
import {
  putCategory,
  getCategoryByID,
  getCategory,
  createCategory
} from "../../services/category";
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

function EditCategory(props) {
  const [form] = Form.useForm();
  const [cateList, setCateList] = useState([]);
  const onFinish = async values => {
    if (props.match.params.id) {
      const res = await putCategory(props.match.params.id, values);
      if (res.status === 200) {
        message.success("修改成功！");
        props.history.push("/admin/categorylist");
      } else {
        message.error("修改失败！");
      }
    } else {
      const res = await createCategory(values);
      if (res.status === 200) {
        message.success("添加成功");
        props.history.push("/admin/categorylist");
      }
    }
  };
  useEffect(() => {
    if (props.match.params.id) {
      getCategoryByID(props.match.params.id).then(res => {
        if (res.data.parent) {
          form.setFieldsValue({
            name: res.data.name,
            parent: res.data.parent._id
          });
        } else {
          form.setFieldsValue({
            name: res.data.name
          });
        }
      });
    }

    getCategory().then(res => {
      setCateList(res.data);
    });
  }, []);

  return (
    <Form
      {...layout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item label="上级分类" name="parent">
        <Select>
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
        label="分类名称"
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

export default withRouter(EditCategory);

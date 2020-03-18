import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Upload, Select, Rate } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { createHero } from "../../services/hero";
import { getCategory } from "../../services/category";
import { getItem } from "../../services/item";
import { withRouter } from "react-router-dom";
import { serveUrl } from "../../utils/config";

const { Option } = Select;
const { TextArea } = Input;

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

function CreateHero(props) {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [cateList, setCateList] = useState([]);
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getCategory().then(res => {
      setCateList(res.data);
    });
    getItem().then(res => {
      setItemList(res.data);
    });
  }, []);

  const onFinish = async values => {
    const res = await createHero({ ...values, avatar: imageUrl });
    if (res.status === 200) {
      message.success("添加成功");
      props.history.push("/herolist");
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const handleChange = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setLoading(false);
      setImageUrl(info.file.response.url);
    }
  };
  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="英雄名称"
        name="name"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="英雄称号"
        name="title"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="英雄分类"
        name="categories"
        rules={[{ required: true, message: "请选择分类!" }]}
      >
        <Select placeholder="请选择英雄分类" mode="multiple">
          {cateList.map(item => {
            return (
              <Option key={item._id} value={item._id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="英雄头像">
        <Upload
          name="file"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action={serveUrl + "/admin/api/upload"}
          onChange={info => handleChange(info)}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>
      <Form.Item
        label="难度"
        name="scores.difficult"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Rate count={10} />
      </Form.Item>
      <Form.Item
        label="技能"
        name="scores.skills"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Rate count={10} />
      </Form.Item>
      <Form.Item
        label="攻击"
        name="scores.attack"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Rate count={10} />
      </Form.Item>
      <Form.Item
        label="生存"
        name="scores.survive"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Rate count={10} />
      </Form.Item>

      <Form.Item
        label="顺风出装"
        name="items1"
        rules={[{ required: true, message: "请选择顺风出装!" }]}
      >
        <Select placeholder="请选择顺风出装" mode="multiple">
          {itemList.map(item => {
            return (
              <Option key={item._id} value={item._id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label="逆风出装"
        name="items2"
        rules={[{ required: true, message: "请选择逆风出装!" }]}
      >
        <Select placeholder="请选择逆风出装" mode="multiple">
          {itemList.map(item => {
            return (
              <Option key={item._id} value={item._id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label="使用技巧"
        name="usageTips"
        rules={[{ required: true, message: "请输入使用技巧!" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        label="对抗技巧"
        name="battleTips"
        rules={[{ required: true, message: "请输入对抗技巧!" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        label="团战思路"
        name="teamTips"
        rules={[{ required: true, message: "请输入团战思路!" }]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(CreateHero);

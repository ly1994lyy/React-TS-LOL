import React, { useState } from "react";
import { Form, Input, Button, message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { createItem } from "../../services/item";
import { withRouter } from "react-router-dom";
import { serveUrl } from "../../utils/config";

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

function CreateItem(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async values => {
    const res = await createItem({ ...values, icon: imageUrl });
    if (res.status === 200) {
      message.success("添加成功");
      props.history.push("/itemlist");
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
        label="装备名称"
        name="name"
        rules={[{ required: true, message: "请输入分类!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="装备图片" rules={[{ required: true, message: "请输入分类!" }]}>
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

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(CreateItem);

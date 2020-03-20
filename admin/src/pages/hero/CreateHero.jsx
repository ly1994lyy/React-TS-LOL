import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  message,
  Upload,
  Select,
  Rate,
  Tabs,
  Row,
  Col
} from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  MinusCircleOutlined
} from "@ant-design/icons";
import { createHero } from "../../services/hero";
import { getCategory } from "../../services/category";
import { getItem } from "../../services/item";
import { withRouter } from "react-router-dom";
import { serveUrl } from "../../utils/config";

const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;

const rules = [{ required: true }];

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
  const [skillsImageUrl, setSkillsImageUrl] = useState([]);
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
    const scores = {
      difficult: values.difficult,
      skilles: values.skilles,
      attack: values.attack,
      survive: values.survive
    };
    const skills = values.skills.map(item=>{
       item.icon = item.icon.file.response.url
       return item
    })
    values.skills = skills
    values.scores = scores;
    const res = await createHero({ ...values, avatar: imageUrl });
    if (res.status === 200) {
      message.success("添加成功");
      props.history.push("/admin/herolist");
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

  const skillsIconChange = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setLoading(false);
      skillsImageUrl.push(info.file.response.url)
      console.log(skillsImageUrl);
      setSkillsImageUrl(skillsImageUrl)
    }
  };

  function callback(key) {
    console.log(key);
  }

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab="基本信息" key="1">
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
            name="difficult"
            rules={[{ required: true, message: "请输入分类!" }]}
          >
            <Rate count={10} />
          </Form.Item>
          <Form.Item
            label="技能"
            name="skilles"
            rules={[{ required: true, message: "请输入分类!" }]}
          >
            <Rate count={10} />
          </Form.Item>
          <Form.Item
            label="攻击"
            name="attack"
            rules={[{ required: true, message: "请输入分类!" }]}
          >
            <Rate count={10} />
          </Form.Item>
          <Form.Item
            label="生存"
            name="survive"
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
        </TabPane>
        <TabPane tab="技能信息" key="2">
          <Form.List name="skills">
            {(fields, { add, remove }) => {
              return (
                <div>
                  <Row>
                    {fields.map((field, index) => (
                      <Col span={12} key={field.key}>
                        <Form.Item
                          name={[field.name, "name"]}
                          fieldKey={[field.fieldKey, "name"]}
                          rules={rules}
                          label="名称"
                        >
                          <Input placeholder="技能名称" />
                        </Form.Item>
                        <Form.Item
                          name={[field.name, "icon"]}
                          fieldKey={[field.fieldKey, "icon"]}
                          rules={rules}
                          label="技能图标"
                        >
                          <Upload
                            name="file"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action={serveUrl + "/admin/api/upload"}
                            onChange={info => skillsIconChange(info)}
                          >
                            {skillsImageUrl ? (
                              <img
                                src={skillsImageUrl[index]}
                                alt="icon"
                                style={{ width: "100%" }}
                              />
                            ) : (
                              uploadButton
                            )}
                          </Upload>
                        </Form.Item>

                        <Form.Item
                          name={[field.name, "description"]}
                          fieldKey={[field.fieldKey, "description"]}
                          rules={rules}
                          label="技能描述"
                        >
                          <Input placeholder="技能描述" />
                        </Form.Item>
                        <Form.Item
                          name={[field.name, "tips"]}
                          fieldKey={[field.fieldKey, "tips"]}
                          rules={rules}
                          label="小提示"
                        >
                          <Input placeholder="小提示" />
                        </Form.Item>
                        <Row>
                          <Col span={8} offset={8}>
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              style={{marginBottom:'80px'}}
                              onClick={() => {
                                remove(field.name);
                              }}
                            /> 删除此技能
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: "80%" }}
                    >
                      <PlusOutlined /> 添加技能
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </TabPane>
      </Tabs>
    </Form>
  );
}

export default withRouter(CreateHero);

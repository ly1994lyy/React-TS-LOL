import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Select } from "antd";
import { getCategory } from "../../services/category";
import { getArticleByID, putArticle } from "../../services/article";
import { withRouter } from "react-router-dom";
// 引入编辑器组件
import BraftEditor from "braft-editor";
// 引入编辑器样式
import "braft-editor/dist/index.css";


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



function EditArticle(props) {
  const [form] = Form.useForm();
  const [editorState,setEditorState] = useState(BraftEditor.createEditorState(null))
  const onFinish = async values => {
    values.body = editorState.toHTML()
    const res = await putArticle(props.match.params.id,{...values});
    if (res.status === 200) {
      message.success("添加成功");
      props.history.push("/admin/articlelist");
    }
  };

  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    getArticleByID(props.match.params.id).then(res => {
        form.setFieldsValue({...res.data});
        setEditorState(BraftEditor.createEditorState(res.data.body))
    });
    getCategory().then(res => {
      setCateList(res.data);
    });
  },[]);

  const handleEditorChange = (e) => {
    setEditorState(e)
}

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item label="所属分类" name="categories">
        <Select placeholder="请选择分类" mode="multiple">
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
        label="文章标题"
        name="title"
        rules={[{ required: true, message: "请输入标题!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="文章内容"
        rules={[{ required: true, message: "请输入内容!" }]}
      >
        <BraftEditor
          value={editorState}
          onChange={(e)=>handleEditorChange(e)}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(EditArticle);


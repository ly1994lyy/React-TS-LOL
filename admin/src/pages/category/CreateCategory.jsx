import React from 'react'
import { Form, Input, Button, message } from 'antd';
import {createCategory} from '../../services/category'
import {withRouter} from 'react-router-dom'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

class CreateCategory extends React.Component {
  onFinish = async (values) => {
    const res = await createCategory({name:values.name})
    message.success('添加成功')
    this.props.history.push('/categorylist')
  };
    render() {
        return (
            <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="新建分类"
        name="name"
        rules={[{ required: true, message: '请输入分类!' }]}
      >
        <Input />
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        )
    }
}

export default withRouter(CreateCategory)
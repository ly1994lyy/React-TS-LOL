import React,{useState,useEffect} from "react";
import { Form, Input, Button, message } from "antd";
import { putCategory, getCategoryByID } from "../../services/category";
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

function  EditCategory(props) {
    const [form] = Form.useForm();
    const onFinish = values => {
            console.log(values.name);
         };
    const[currentData,setCurrentData] = useState({})
    useEffect(()=>{
        getCategoryByID(props.match.params.id).then(
            res=>{
                setCurrentData(res.data)
                console.log(currentData);
            }
        )
    })
    
    return(
        <Form
        {...layout}
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{name:currentData.name}}
      >
        <Form.Item
          label="修改分类"
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
    )
}

// class EditCategory extends React.Component {
//   formRef = React.createRef();
//   state = {
//     currentData: {
//         name:''
//     }
//   };
//   onFinish = values => {
//     console.log(values.name);
//   };

//   componentDidMount() {
//     this.getCateById();
//   }

//   async getCateById() {
//     const res = await getCategoryByID(this.props.match.params.id);
//      this.setState({
//        currentData: res.data
//      });
//   }

//   render() {
//     return (
    //   <Form
    //     {...layout}
    //     name="basic"
    //     onFinish={this.onFinish}
    //     onFinishFailed={onFinishFailed}
    //   >
    //     <Form.Item
    //       label="修改分类"
    //       ref={this.formRef}
    //       name="name"
    //       rules={[{ required: true, message: "请输入分类!" }]}
    //     >
    //       <Input />
    //     </Form.Item>

    //     <Form.Item {...tailLayout}>
    //       <Button type="primary" htmlType="submit">
    //         Submit
    //       </Button>
    //     </Form.Item>
    //   </Form>
//     );
//   }
// }

export default withRouter(EditCategory);

import React from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { getCategory,delCategory } from "../../services/category";


class CategoryList extends React.Component {
  state = {
    dataSource: [],
    columns : [
        {
          title: "ID",
          dataIndex: "_id"
        },
        {
          title: "名称",
          dataIndex: "name"
        },
        {
          title: "操作",
          render: (txt, record, index) => {
            return (
              <div>
                <Button type="primary" size="small" shape="round" onClick={()=>{
                    this.props.history.push(`/editcategory/${record._id}`)
                }}>
                  修改
                </Button>
                <Popconfirm
                  title="确定要删除此项吗？"
                  onCancel={() => message.info("取消删除")}
                  onConfirm={async() => {
                      const res = await delCategory(record._id)
                      console.log(res)
                      if(res.data.success===true) {
                          return message.success('删除成功！')
                      }
                  }}
                >
                  <Button
                    type="danger"
                    size="small"
                    shape="round"
                    style={{ margin: "0 10px" }}
                  >
                    删除
                  </Button>
                </Popconfirm>
              </div>
            );
          }
        }
      ]
  };


  componentDidMount() {
    this.getCategoryList();
  }

  componentDidUpdate() {
      this.getCategoryList()
  }

  async getCategoryList() {
    const res = await getCategory();
    this.setState({
      dataSource: res.data
    });
  }

  render() {
    return (
      <Table
        rowKey="_id"
        columns={this.state.columns}
        dataSource={this.state.dataSource}
        bordered
        stripe
      />
    );
  }
}

export default CategoryList;

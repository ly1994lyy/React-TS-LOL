import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { getCategory, delCategory } from "../../services/category";

function CategoryList(props) {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getCategory().then(res => {
      setDataSource(res.data);
    });
  }, []);
  const showTotal = (total) => {
    return `共${total}条`
  };
  const columns = [
    {
      title: "序号",
      render:(text,record,index)=>index+1
    },
    {
      title: "ID",
      dataIndex: "_id"
    },
    {
      title: "上级分类",
      dataIndex:"parent",
      render: (text, record, index) => {
        if(record.parent){
          return record.parent.name
        }else return
      }
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
            <Button
              type="primary"
              size="small"
              shape="round"
              onClick={() => {
                props.history.push(`/admin/editcategory/${record._id}`);
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="确定要删除此项吗？"
              onCancel={() => message.info("取消删除")}
              onConfirm={async () => {
                const res = await delCategory(record._id);
                if (res.data.success === true) {
                   message.success("删除成功！")
                   getCategory().then(res => {
                    setDataSource(res.data);
                  });
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
  ];

  return (
    <Table
      rowKey="_id"
      columns={columns}
      pagination={{
        pageSize: 5,
        showTotal:showTotal,
        showQuickJumper: true,
      }}
      dataSource={dataSource}
      bordered
      stripe
    />
  );
}

export default CategoryList;

import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { getItem, delItem } from "../../services/item";

function ItemList(props) {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getItem().then(res => {
      setDataSource(res.data);
    });
  }, []);
  const showTotal = (total) => {
    return `共${total}条`
  };
  const columns = [
    {
      title: "序号",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "ID",
      dataIndex: "_id",
      width: 200,
      align: "center"
    },
    {
      title: "装备名称",
      dataIndex: "name",
      width: 180,
      align: "center"
    },
    {
      title: "装备图片",
      dataIndex: "icon",
      align: "center",
      render: (text, record) => {
        return <img src={record.icon} alt="" style={{ width: "60px" }} />;
      }
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
                props.history.push(`/admin/edititem/${record._id}`);
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="确定要删除此项吗？"
              onCancel={() => message.info("取消删除")}
              onConfirm={async () => {
                const res = await delItem(record._id);
                if (res.data.success === true) {
                  message.success("删除成功！");
                  getItem().then(res => {
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
      dataSource={dataSource}
      pagination={{
        pageSize: 5,
        showTotal:showTotal,
        showQuickJumper: true,
      }}
      bordered
      stripe
    />
  );
}

export default ItemList;

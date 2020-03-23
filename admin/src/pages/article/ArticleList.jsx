import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message,Tag } from "antd";
import { getArticle,delArticle } from "../../services/article";

function ArticleList(props) {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getArticle().then(res => {
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
      title: "分类",
      width:280,
      align:"center",
      render: (text, record, index) => {
          if(record.categories){
            return (
                <div>
                    {
                        record.categories.map((item,index)=>{
                            return <Tag color="green" key={index}>{item.name}</Tag>
                        })
                    }
                </div>
            )
          }else return
         
      }
    },
    {
      title: "文章标题",
      dataIndex: "title"
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
                props.history.push(`/admin/editarticle/${record._id}`);
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="确定要删除此项吗？"
              onCancel={() => message.info("取消删除")}
              onConfirm={async () => {
                const res = await delArticle(record._id);
                if (res.data.success === true) {
                   message.success("删除成功！")
                   getArticle().then(res => {
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

export default ArticleList;


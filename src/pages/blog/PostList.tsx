import React, {useEffect, useState} from "react";
import {PageContainer} from "@ant-design/pro-components";
import {Divider, List} from 'antd';
import {getBlogPost} from "@/services/blog/BlogPost";

const PostList: React.FC = () => {
  const [data, setData] = useState<API.Post[] | undefined>(undefined)

  useEffect(() => {
    getBlogPost({PageSize: 10}).then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <PageContainer>
      <Divider orientation="left">Default Size</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item.title}
          </List.Item>
        )}
      />
    </PageContainer>
  )
}

export default PostList;

import React, {useState} from "react";
import {PageContainer} from "@ant-design/pro-components";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card, List} from 'antd';
import {useRequest} from 'umi';


import {getPhoto} from '@/services/blog/Photo'

const {Meta} = Card;


const PhotoList: React.FC = () => {
  const baseUrl = "http://localhost:5038"

  const {data, error, loading, run} = useRequest(
    (values: any = {page: 1, pageSize: 5}) => {
      console.log('values', values)
      return getPhoto(values)
    }, {
      formatResult: (res) => {
        return {
          list: res.data,
          pagination: res.pagination
        }
      }
    })

  return (
    <PageContainer>
      <List
        loading={loading}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        pagination={{
          total: data?.pagination?.totalItemCount,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20],
          onChange: (page, pageSize) => {
            run({page, pageSize})
          }
        }}
        dataSource={data?.list}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{width: 300}}
              cover={
                <img
                  alt="example"
                  src={`${baseUrl}/media/photography/${item.id}.jpg`}
                />
              }
              actions={[
                <SettingOutlined key="setting"/>,
                <EditOutlined key="edit"/>,
                <EllipsisOutlined key="ellipsis"/>,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
                title={item.title}
                description={item.location}
              />
            </Card>
          </List.Item>
        )}
      />
    </PageContainer>
  )
}

export default PhotoList;

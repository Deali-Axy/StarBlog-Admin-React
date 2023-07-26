import {PageContainer} from "@ant-design/pro-components";
import {useRequest} from 'umi';
import {getApiComment} from '@/services/comment/Comment'
import React, {useState} from "react";
import {List, Pagination} from "antd";

export default function () {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(12)

  const {data, loading, run} = useRequest(
    (values = {page: 1, pageSize: pageSize}) => {
      return getApiComment({Page: values.page, PageSize: values.pageSize})
    },
    {
      formatResult: (res) => {
        return {
          list: res.data,
          pagination: res.pagination
        }
      }
    }
  )

  return (
    <PageContainer
      footer={[
        <Pagination
          key={0}
          total={data?.pagination?.totalItemCount}
          current={page}
          pageSize={pageSize}
          showSizeChanger={true}
          pageSizeOptions={[6, 12, 24]}
          onChange={(page, pageSize) => {
            setPage(page)
            setPageSize(pageSize)
            run({page, pageSize})
          }}
        />
      ]}
    >
      {data && <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data.list}
        renderItem={(item) => (
          <List.Item>
            {item.content}
          </List.Item>
        )}
      />}


    </PageContainer>
  )
}

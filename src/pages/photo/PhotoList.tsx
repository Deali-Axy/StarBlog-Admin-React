import React, {useState} from "react";
import {PageContainer} from "@ant-design/pro-components";
import {Pagination} from 'antd';
import {useRequest} from 'umi';
import {PhotoCard} from "./components/PhotoCard";

import {getPhoto} from '@/services/blog/Photo'
import {Masonry} from "@mui/lab";



const PhotoList: React.FC = () => {
  const [pageSize, setPageSize] = useState(12)

  const {data, error, loading, run} = useRequest(
    (values: any = {page: 1, pageSize: pageSize}) => {
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
    <PageContainer
      footer={[
        <Pagination
          key={0}
          total={data?.pagination?.totalItemCount}
          pageSize={pageSize}
          showSizeChanger={true}
          pageSizeOptions={[6, 12, 24]}
          onChange={(page, pageSize) => {
            setPageSize(pageSize)
            run({page, pageSize})
          }}
        />
      ]}>
      <Masonry columns={6} spacing={2}>
        {/* @ts-ignore */}
        {data && data.list?.map(item => <PhotoCard key={item.id} photo={item}/>)}
      </Masonry>
    </PageContainer>
  )
}

export default PhotoList;

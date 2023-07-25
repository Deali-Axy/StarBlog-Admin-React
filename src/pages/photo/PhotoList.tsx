import React, {useState} from "react";
import {PageContainer} from "@ant-design/pro-components";
import {Pagination, Modal, Form, Input, Button, message} from 'antd';
import {useRequest} from 'umi';
import {PhotoCard} from "./components/PhotoCard";

import {getApiPhoto, putId as updatePhoto} from '@/services/photo/Photo'
import {Masonry} from "@mui/lab";


const PhotoList: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(12)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState<API.Photo | undefined>(undefined)

  const {data, error, loading, run} = useRequest(
    (values: any = {page: 1, pageSize: pageSize}) => {
      console.log('values', values)
      return getApiPhoto(values)
    }, {
      formatResult: (res) => {
        return {
          list: res.data,
          pagination: res.pagination
        }
      }
    })

  const EditModal = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    function onFinish(values: any) {
      if (!currentPhoto) return
      setLoading(true)
      console.log(values)
      updatePhoto({id: currentPhoto.id!}, values)
        .then(res => {
          messageApi.success(res.message)
          setEditModalOpen(!editModalOpen)
          setCurrentPhoto(undefined)
        })
        .catch(res => {
          messageApi.error(res.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    return <>
      {currentPhoto && <Modal
        title='编辑图片' open={editModalOpen}
        onCancel={() => {
          console.log('cancel')
          setEditModalOpen(!editModalOpen)
          setCurrentPhoto(undefined)
        }}
        footer={null}
      >
        <Form
          form={form}
          name='basic'
          labelCol={{span: 4}}
          wrapperCol={{span: 20}}
          style={{maxWidth: 600}}
          initialValues={currentPhoto}
          autoComplete='off'
          onFinish={onFinish}
        >
          <Form.Item label="作品标题" name="title"
                     rules={[{required: true, message: '请输入作品标题'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item label='拍摄地点' name='location'
                     rules={[{required: true, message: '请输入拍摄地点'}]}>
            <Input/>
          </Form.Item>

          <Form.Item label='创建时间' name='createTime'>
            <Input/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      }
    </>
  }

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
      ]}>
      <Masonry columns={6} spacing={2}>
        {/* @ts-ignore */}
        {data && data.list?.map(item =>
          <PhotoCard
            key={item.id}
            photo={item}
            onEditClick={() => {
              setCurrentPhoto(item)
              setEditModalOpen(true)
            }}
          />)}
      </Masonry>

      <EditModal/>
    </PageContainer>
  )


}

export default PhotoList;

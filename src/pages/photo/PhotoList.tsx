import React, {useState} from "react";
import {PageContainer} from "@ant-design/pro-components";
import {Pagination, Modal, Form, Input, Button, message, Spin} from 'antd';
import {useRequest} from 'umi';
import {PhotoCard} from "./components/PhotoCard";

import {deleteId as deletePhoto, getApiPhoto, putId as updatePhoto} from '@/services/photo/Photo'
import {Masonry} from "@mui/lab";
import {DeleteOutlined} from "@ant-design/icons";


const PhotoList: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [confirmModal, confirmModalContextHolder] = Modal.useModal()
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

  const PhotoItem: React.FC<{ photo: API.Photo }> = ({photo}) => {
    const [loading, setLoading] = useState(false)

    function handleDelete(photo: API.Photo) {
      confirmModal.confirm({
        title: '确认删除',
        icon: <DeleteOutlined/>,
        content: `确认删除图片 ${photo.title} 吗？`,
        onOk: () => {
          setLoading(true)
          deletePhoto({id: photo.id!})
            .then(res => {
              messageApi.success(res.message)
              setLoading(false)
              run({page, pageSize})
            })
        }
      })
    }

    return (
      <Spin spinning={loading}>
        <PhotoCard
          photo={photo}
          onEditClick={() => {
            setCurrentPhoto(photo)
            setEditModalOpen(true)
          }}
          onDeleteClick={handleDelete}
        />
      </Spin>
    )
  }

  function EditModal() {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    function onFinish(values: any) {
      if (!currentPhoto) return
      setLoading(true)
      console.log(values)
      updatePhoto({id: currentPhoto.id!}, values)
        .then(res => {
          console.log(res.message)
          messageApi.success(res.message)
          setEditModalOpen(!editModalOpen)
          setCurrentPhoto(undefined)
          run({page, pageSize})
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
      // loading={loading}
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
      {confirmModalContextHolder}
      {contextHolder}
      {/* todo 修复可能会触发警告的地方 */}
      {data && <Masonry columns={6} spacing={2}>
        {/* @ts-ignore */}
        {data.list?.map(item => <PhotoItem key={item.id} photo={item}/>)}
      </Masonry>}
      <EditModal/>
    </PageContainer>
  )


}

export default PhotoList;

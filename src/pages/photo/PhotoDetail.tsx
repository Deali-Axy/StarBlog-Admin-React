import {useParams, useRequest} from 'umi';
import {PageContainer} from "@ant-design/pro-components";
import {Empty, Image, Row, Col, Descriptions, Divider, Form, Input, Button, message, Space, Modal} from 'antd';
import React, {useEffect, useState} from "react";
import {getId as getPhoto, putId as updatePhoto, deleteId as deletePhoto} from '@/services/photo/Photo'
import {baseUrl} from "@/common";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  InfoOutlined,
  ToolOutlined
} from '@ant-design/icons';


export default function () {
  const params = useParams()
  const [messageApi, messageContextHolder] = message.useMessage();
  const [deleteModal, deleteModalContextHolder] = Modal.useModal()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const {data: photo, loading, run} = useRequest((values: any) => {
    if (params.id) return getPhoto({id: params.id})
  })

  useEffect(() => {
    console.log(params)
  }, [])

  function handleDelete() {
    if (!photo || !photo?.id) {
      messageApi.warning('无照片数据！')
      return
    }

    deleteModal.confirm({
      title: '确认删除',
      icon: <DeleteOutlined/>,
      content: `确认删除图片 ${photo.title} 吗？`,
      onOk: () => {
        setDeleteLoading(true)
        deletePhoto({id: photo.id!})
          .then(res => {
            messageApi.success(res.message)
            history.back()
          })
          .finally(() => setDeleteLoading(false))
      }
    })

  }

  function handleUpdate(values: any) {
    if (!photo || !photo?.id) {
      messageApi.warning('无照片数据！')
      return
    }

    setSubmitLoading(true)
    updatePhoto({id: photo.id}, values)
      .then(res => {
        console.log(res.message)
        messageApi.success(res.message)
        run({})
      })
      .catch(res => {
        messageApi.error(res.message)
      })
      .finally(() => setSubmitLoading(false))
  }

  return (
    <PageContainer loading={loading}>
      {messageContextHolder}
      {deleteModalContextHolder}
      {!params.id && <Empty/>}
      {photo && <>
        <Divider orientation='left'>
          <InfoOutlined/> 信息
        </Divider>
        <Descriptions style={{paddingTop: 8}}>
          <Descriptions.Item label="ID">{photo.id}</Descriptions.Item>
          <Descriptions.Item label="作品标题">{photo.title}</Descriptions.Item>
          <Descriptions.Item label="拍摄地点">{photo.location}</Descriptions.Item>
          <Descriptions.Item label="宽度">{photo.width}</Descriptions.Item>
          <Descriptions.Item label="高度">{photo.height}</Descriptions.Item>
          <Descriptions.Item label="创建时间">{photo.createTime}</Descriptions.Item>
        </Descriptions>
        <Divider orientation='left'>
          <ToolOutlined/> 操作
        </Divider>
        <Space wrap>
          <Button icon={<EyeOutlined/>}
                  href={`${baseUrl}/Photography/Photo/${photo.id}`} target='_blank'>在博客上查看</Button>
          <Button icon={<CheckOutlined/>}>设置推荐</Button>
          <Button icon={<CloseOutlined/>}>取消推荐</Button>
          <Button icon={<DeleteOutlined/>} danger loading={deleteLoading} onClick={handleDelete}>删除</Button>
        </Space>
        <Divider orientation='left'>
          <EditOutlined/> 编辑
        </Divider>
        <Row gutter={8}>
          <Col xl={6}>
            <Image src={`${baseUrl}/media/photography/${photo.id}.jpg`}/>
          </Col>
          <Col xl={18}>
            <Form
              name='basic'
              layout="vertical"
              // labelCol={{span: 4}}
              // wrapperCol={{span: 20}}
              style={{margin: 8}}
              initialValues={photo}
              autoComplete='off'
              onFinish={handleUpdate}
            >
              <Form.Item label="作品标题" name="title" rules={[{required: true, message: '请输入作品标题'}]}>
                <Input/>
              </Form.Item>

              <Form.Item label='拍摄地点' name='location' rules={[{required: true, message: '请输入拍摄地点'}]}>
                <Input/>
              </Form.Item>

              <Form.Item label='创建时间' name='createTime'>
                <Input/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={submitLoading}>
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>}
    </PageContainer>
  )
}

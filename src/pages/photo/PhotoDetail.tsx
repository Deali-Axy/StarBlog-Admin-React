import {useParams, useRequest} from 'umi';
import {PageContainer} from "@ant-design/pro-components";
import {Empty, Image, Row, Col, Descriptions, Divider, Form, Input, Button, message, Space} from 'antd';
import React, {useEffect, useState} from "react";
import {getId as getPhoto, putId as updatePhoto} from '@/services/photo/Photo'
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
  const [messageApi, contextHolder] = message.useMessage();
  const [submitLoading, setSubmitLoading] = useState(false)
  const {data, loading, run} = useRequest((values: any) => {
    if (params.id) return getPhoto({id: params.id})
  })

  useEffect(() => {
    console.log(params)
  }, [])

  function onFormFinish(values: any) {
    if (!data || !data?.id) {
      messageApi.warning('无照片数据！')
      return
    }

    setSubmitLoading(true)
    updatePhoto({id: data.id}, values)
      .then(res => {
        console.log(res.message)
        messageApi.success(res.message)
        run({})
      })
      .catch(res => {
        messageApi.error(res.message)
      })
      .finally(() => {
        setSubmitLoading(false)
      })
  }

  return (
    <PageContainer loading={loading}>
      {contextHolder}
      {!params.id && <Empty/>}
      {data && <>
        <Divider orientation='left'>
          <InfoOutlined/> 信息
        </Divider>
        <Descriptions style={{paddingTop: 8}}>
          <Descriptions.Item label="ID">{data.id}</Descriptions.Item>
          <Descriptions.Item label="作品标题">{data.title}</Descriptions.Item>
          <Descriptions.Item label="拍摄地点">{data.location}</Descriptions.Item>
          <Descriptions.Item label="宽度">{data.width}</Descriptions.Item>
          <Descriptions.Item label="高度">{data.height}</Descriptions.Item>
          <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
        </Descriptions>
        <Divider orientation='left'>
          <ToolOutlined/> 操作
        </Divider>
        <Space wrap>
          <Button icon={<EyeOutlined/>}
                  href={`${baseUrl}/Photography/Photo/${data.id}`} target='_blank'>在博客上查看</Button>
          <Button icon={<CheckOutlined/>}>设置推荐</Button>
          <Button icon={<CloseOutlined/>}>取消推荐</Button>
          <Button icon={<DeleteOutlined/>} danger>删除</Button>
        </Space>
        <Divider orientation='left'>
          <EditOutlined/> 编辑
        </Divider>
        <Row gutter={8}>
          <Col xl={6}>
            <Image src={`${baseUrl}/media/photography/${data.id}.jpg`}/>
          </Col>
          <Col xl={18}>
            <Form
              name='basic'
              layout="vertical"
              // labelCol={{span: 4}}
              // wrapperCol={{span: 20}}
              style={{margin: 8}}
              initialValues={data}
              autoComplete='off'
              onFinish={onFormFinish}
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

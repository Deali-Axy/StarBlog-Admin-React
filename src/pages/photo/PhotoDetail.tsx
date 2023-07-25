import {useParams, useRequest} from 'umi';
import {PageContainer} from "@ant-design/pro-components";
import {Empty, Image, Row, Col, Descriptions, Card, Form, Input, Button} from 'antd';
import React, {useEffect} from "react";
import {getId as getPhoto} from '@/services/photo/Photo'
import {baseUrl} from "@/common";


export default function () {
  const params = useParams()
  const {data, loading, run} = useRequest((values: any) => {
    if (params.id) return getPhoto({id: params.id})
  })

  useEffect(() => {
    console.log(params)
  }, [])

  return (
    <PageContainer>
      {!params.id && <Empty/>}
      {data && <>
        <Descriptions>
          <Descriptions.Item label="ID">{data.id}</Descriptions.Item>
          <Descriptions.Item label="作品标题">{data.title}</Descriptions.Item>
          <Descriptions.Item label="拍摄地点">{data.location}</Descriptions.Item>
          <Descriptions.Item label="宽度">{data.width}</Descriptions.Item>
          <Descriptions.Item label="高度">{data.height}</Descriptions.Item>
          <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
        </Descriptions>
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
              onFinish={() => {
              }}
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
          </Col>
        </Row>
      </>}
    </PageContainer>
  )
}

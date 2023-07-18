import React from 'react';
import {PageContainer} from "@ant-design/pro-components";
import {Alert, Card, Typography} from "antd";
import {HeartTwoTone, SmileTwoTone} from "@ant-design/icons";


const Demo1: React.FC = () => {
  return (
    <PageContainer content='测试页面'>
      <Card>
        <Alert
          message='信息'
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{textAlign: 'center'}}>
          <SmileTwoTone/> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96"/> You
        </Typography.Title>
      </Card>
      <p style={{textAlign: 'center', marginTop: 24}}>
        Want to add more pages? Please refer to xxx
      </p>
    </PageContainer>
  );
};

export default Demo1;

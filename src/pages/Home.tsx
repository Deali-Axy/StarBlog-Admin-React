import DemoArea from '@/pages/dashboard/components/DemoArea';
import DemoColumn from '@/pages/dashboard/components/DemoColumn';
import DemoInfoCard from '@/pages/dashboard/components/DemoInfoCard';
import DemoLine from '@/pages/dashboard/components/DemoLine';
import DemoPie from '@/pages/dashboard/components/DemoPie';
import DemoStatCardLarge1 from '@/pages/dashboard/components/DemoStatCardLarge1';
import DemoStatisticCard from '@/pages/dashboard/components/DemoStatisticCard';
import DemoStatisticChart from '@/pages/dashboard/components/DemoStatisticChart';
import { PageContainer } from '@ant-design/pro-components';
import { Col, Row } from 'antd';
import React from 'react';

const Home: React.FC = () => {
  return (
    <PageContainer content="欢迎进入系统">
      <Row gutter={[16, 24]} style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <DemoStatCardLarge1 />
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col span={6}>
          <DemoStatisticCard />
        </Col>
        <Col span={6}>
          <DemoStatisticCard />
        </Col>
        <Col span={6}>
          <DemoStatisticCard />
        </Col>
        <Col span={6}>
          <DemoStatisticCard />
        </Col>
        <Col span={24}>
          <DemoInfoCard />
        </Col>

        <Col span={8}>
          <DemoStatisticChart />
        </Col>
        <Col span={8}>
          <DemoStatisticChart />
        </Col>
        <Col span={8}>
          <DemoStatisticChart />
        </Col>

        <Col span={6}>
          <DemoLine />
        </Col>
        <Col span={6}>
          <DemoColumn />
        </Col>
        <Col span={6}>
          <DemoPie />
        </Col>
        <Col span={6}>
          <DemoArea />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Home;

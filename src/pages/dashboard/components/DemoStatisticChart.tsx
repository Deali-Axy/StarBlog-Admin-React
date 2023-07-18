import {EllipsisOutlined} from '@ant-design/icons';
import {StatisticCard} from '@ant-design/pro-components';
import DemoColumn from "@/pages/dashboard/components/DemoColumn";

const DemoStatisticChart = () => {
  return (
    <StatisticCard
      title="大盘趋势"
      tip="大盘说明"
      extra={<EllipsisOutlined/>}
      chart={<DemoColumn/>}
    />
  );
};

export default DemoStatisticChart;

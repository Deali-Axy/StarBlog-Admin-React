import {getBlogOverview} from '@/services/blog/Blog'
import {StatisticCard} from '@ant-design/pro-components';
import {useEffect, useState} from 'react';

const {Statistic, Divider} = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);
  const [overview, setOverview] = useState<API.BlogOverview | undefined>(undefined)

  useEffect(() => {
    getBlogOverview().then(res => setOverview(res.data))
  }, [])

  return (
    <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
      <StatisticCard
        statistic={{
          title: '文章数量',
          value: overview?.postsCount,
        }}
      />
      <Divider type={responsive ? 'horizontal' : 'vertical'}/>
      <StatisticCard
        statistic={{
          title: '分类数量',
          value: overview?.categoriesCount,
          description: <Statistic title="占比" value="61.5%"/>,
        }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
            alt="百分比"
            width="100%"
          />
        }
        chartPlacement="left"
      />
      <StatisticCard
        statistic={{
          title: '图片数量',
          value: overview?.photosCount,
          description: <Statistic title="占比" value="38.5%"/>,
        }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
            alt="百分比"
            width="100%"
          />
        }
        chartPlacement="left"
      />
      <StatisticCard
        statistic={{
          title: '免费流量',
          value: 1806062,
          description: <Statistic title="占比" value="38.5%"/>,
        }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
            alt="百分比"
            width="100%"
          />
        }
        chartPlacement="left"
      />
    </StatisticCard.Group>
  );
};

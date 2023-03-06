import { memo, ReactElement } from 'react';

import ReactEcharts from 'echarts-for-react';

import { StatisticCircleOptionType } from '../types';

import styles from './StatisticsCircle.module.css';

type StatisticsCirclePropsType = {
  option: StatisticCircleOptionType;
};

const StatisticsCircle = memo(
  ({ option }: StatisticsCirclePropsType): ReactElement => (
    <div className='statistic-circle'>
      <ReactEcharts option={option} />
    </div>
  )
);

export default StatisticsCircle;

StatisticsCircle.displayName = 'StatisticsCircle';

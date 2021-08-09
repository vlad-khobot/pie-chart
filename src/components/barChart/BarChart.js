import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { getUsersSupportStatisticWithoutFill } from '../../helpers/funtions';
import data from '../../data/data.json';

export default function CustomBarChart() {
  const usersSupportStatisticWithoutFill =
    getUsersSupportStatisticWithoutFill(data);
  return (
    <BarChart
      width={280}
      height={130}
      data={usersSupportStatisticWithoutFill}
      margin={{
        top: 10,
        right: 40,
        left: 5,
        bottom: 0,
      }}
      layout="vertical"
      barCategoryGap={2}
      // barSize={12}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        type="number"
        tick={{ fontSize: 6, fontFamily: 'sans-serif' }}
        tickLine={false}
        tickCount={7}
        height={25}
      />
      <YAxis
        dataKey="name"
        type="category"
        tick={{
          fontSize: 9,
          fontFamily: 'sans-serif',
          fill: '#e4e9eb',
          width: 75,
        }}
        interval={0}
        tickLine={false}
      />
      <Tooltip filterNull />
      <Legend
        align="center"
        wrapperStyle={{
          fontFamily: 'sans-serif',
          fontSize: 9,
          bottom: 10,
          right: 40,
          width: 170,
        }}
        iconSize={6}
      />
      <Bar
        legendType="circle"
        dataKey="Updated"
        stackId={1}
        fill="#08ad36"
        background={{ color: '#fff', opacity: '80%' }}
      />
      <Bar
        legendType="circle"
        dataKey="Update available"
        stackId={1}
        fill="#1b7b36"
      />
      <Bar
        legendType="circle"
        dataKey="Update required"
        stackId={1}
        fill="#de7800"
      />
      <Bar
        legendType="circle"
        dataKey="Out of support"
        stackId={1}
        fill="#e31c1c"
      />
    </BarChart>
  );
}

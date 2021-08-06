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
        bottom: 5,
      }}
      layout="vertical"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        type="number"
        tick={{ fontSize: 6, fontFamily: 'sans-serif' }}
        tickLine={false}
      />
      <YAxis
        dataKey="name"
        type="category"
        width={60}
        tick={{
          fontSize: 9,
          fontFamily: 'sans-serif',
          fill: '#e4e9eb',
          width: 70,
        }}
        tickLine={false}
      />
      <Tooltip />
      <Legend
        align="center"
        wrapperStyle={{
          fontFamily: 'sans-serif',
          fontSize: 9,
          margin: 0,
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
        barSize={10}
      />
      <Bar
        legendType="circle"
        dataKey="Update available"
        stackId={1}
        fill="#1b7b36"
        barSize={10}
      />
      <Bar
        legendType="circle"
        dataKey="Update required"
        stackId={1}
        fill="#de7800"
        barSize={10}
      />
      <Bar
        legendType="circle"
        dataKey="Out of support"
        stackId={1}
        fill="#e31c1c"
        barSize={10}
      />
    </BarChart>
  );
}

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
      width={300}
      height={180}
      data={usersSupportStatisticWithoutFill}
      margin={{
        top: 10,
        right: 5,
        left: 10,
        bottom: 5,
      }}
      layout="vertical"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" width={75} />
      <Tooltip />
      <Legend
        align="center"
        wrapperStyle={{
          width: '300px',
          height: '40px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      />
      <Bar
        legendType="circle"
        dataKey="Updated"
        stackId={1}
        fill="#08ad36"
        background={{ color: '#fff', opacity: '80%' }}
        barSize={13}
      />
      <Bar
        legendType="circle"
        dataKey="Update available"
        stackId={1}
        fill="#1b7b36"
        barSize={13}
      />
      <Bar
        legendType="circle"
        dataKey="Update required"
        stackId={1}
        fill="#de7800"
        barSize={13}
      />
      <Bar
        legendType="circle"
        dataKey="Out of support"
        stackId={1}
        fill="#e31c1c"
        barSize={13}
      />
    </BarChart>
  );
}

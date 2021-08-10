import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { loadingBarData } from '../../data/loadingBarData';
import s from './barChart.module.css';

export default function LoadingBarChart() {
  const date = new Date().toDateString();
  const renderLegend = () => {
    return (
      <ul className={s.loadingList}>
        <li className={s.loadingItem}>
          <FiberManualRecordIcon
            style={{ color: '#e31c1c', fontSize: 10, marginRight: 3 }}
          />
          {loadingBarData.free === 0 && 'Not in use'}
          {loadingBarData.free !== 0 && `Used: ${loadingBarData.used}TiB`}
        </li>
        <li className={s.loadingItem}>
          <FiberManualRecordIcon
            style={{ color: '#08ad36', fontSize: 10, marginRight: 3 }}
          />
          {loadingBarData.free === 0 && 'Totally full'}
          {loadingBarData.free !== 0 && `Free: ${loadingBarData.free}TiB`}
        </li>
      </ul>
    );
  };
  return (
    <>
      <span className={s.box}>
        <span className={s.total}>Total: {loadingBarData.total}TiB</span>
        <span className={s.date}>{date}</span>
      </span>

      <BarChart
        width={280}
        height={130}
        data={[loadingBarData]}
        margin={{
          top: 55,
          right: 20,
          left: 20,
          bottom: 35,
        }}
        layout="vertical"
        barSize={14}
      >
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" interval={0} hide />
        <Tooltip />
        <Legend
          align="left"
          wrapperStyle={{
            fontFamily: 'sans-serif',
            fontSize: 9,
            bottom: 30,
            right: 20,
            width: 240,
            height: 20,
          }}
          iconSize={6}
          content={renderLegend}
        />
        <Bar
          legendType="circle"
          dataKey="used"
          stackId={2}
          fill="#e31c1c"
          background={{ color: '#fff', opacity: '80%' }}
        />
        <Bar legendType="circle" dataKey="free" stackId={2} fill="#08ad36" />
      </BarChart>
    </>
  );
}

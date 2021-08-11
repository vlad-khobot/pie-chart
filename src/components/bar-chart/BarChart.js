import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useState } from 'react';
import data from '../../data/data.json';
import { getUsersSupportStatisticWithoutFill } from '../../helpers/funtions';
import s from './barChart.module.css';

export default function CustomBarChart() {
  const [update, setUpdate] = useState('Updated');
  const [updateAvailable, setUpdateAvailable] = useState('Update available');
  const [updateRequired, setUpdateRequired] = useState('Update required');
  const [outOfSupport, setOutOfSupport] = useState('Out of support');
  const usersSupportStatisticWithoutFill =
    getUsersSupportStatisticWithoutFill(data);
  const handleToggleStats = field => {
    switch (field) {
      case 'Updated':
        update === 'Updated' ? setUpdate(null) : setUpdate('Updated');
        break;
      case 'Update available':
        updateAvailable === 'Update available'
          ? setUpdateAvailable(null)
          : setUpdateAvailable('Update available');
        break;
      case 'Update required':
        updateRequired === 'Update required'
          ? setUpdateRequired(null)
          : setUpdateRequired('Update required');
        break;
      case 'Out of support':
        outOfSupport === 'Out of support'
          ? setOutOfSupport(null)
          : setOutOfSupport('Out of support');
        break;

      default:
        return field;
    }
  };
  const renderLegend = () => {
    return (
      <ul className={s.list}>
        <li
          className={s.item}
          onClick={() => {
            handleToggleStats('Updated');
          }}
        >
          <FiberManualRecordIcon
            style={{ color: '#08ad36', fontSize: 10, marginRight: 3 }}
          />
          {'Update'}
        </li>
        <li
          className={s.item}
          onClick={() => {
            handleToggleStats('Update available');
          }}
        >
          <FiberManualRecordIcon
            style={{ color: '#1b7b36', fontSize: 10, marginRight: 3 }}
          />
          {'Update available'}
        </li>
        <li
          className={s.item}
          onClick={() => {
            handleToggleStats('Update required');
          }}
        >
          <FiberManualRecordIcon
            style={{ color: '#de7800', fontSize: 10, marginRight: 3 }}
          />
          {'Update required'}
        </li>
        <li
          className={s.item}
          onClick={() => {
            handleToggleStats('Out of support');
          }}
        >
          <FiberManualRecordIcon
            style={{ color: '#e31c1c', fontSize: 10, marginRight: 3 }}
          />
          {'Out of support'}
        </li>
      </ul>
    );
  };

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
      barCategoryGap={2.5}
    >
      <CartesianGrid strokeDasharray="3 0" horizontal={false} opacity={0.5} />
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
        align="left"
        wrapperStyle={{
          height: 30,
          width: 170,
          bottom: 10,
          right: 40,
        }}
        iconSize={6}
        onClick={() => {
          console.log();
        }}
        content={renderLegend}
      />
      <Bar
        legendType="circle"
        dataKey={update}
        stackId={1}
        fill="#08ad36"
        background={{ color: '#fff', opacity: '80%', radius: 15 }}
        // radius={[15, 0, 0, 15]}
        radius={15}
      />
      <Bar
        legendType="circle"
        dataKey={updateAvailable}
        stackId={1}
        fill="#1b7b36"
        radius={15}
      />
      <Bar
        legendType="circle"
        dataKey={updateRequired}
        stackId={1}
        fill="#de7800"
        radius={15}
      />
      <Bar
        legendType="circle"
        dataKey={outOfSupport}
        stackId={1}
        fill="#e31c1c"
        // radius={[0, 15, 15, 0]}
        radius={15}
      />
    </BarChart>
  );
}

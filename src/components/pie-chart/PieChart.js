import data from '../../data/data.json';
import { getMaxValue } from '../../helpers/funtions';
import CustomBarChart from '../barChart/BarChart';
import LoadingBarChart from '../barChart/LoadingBarChart';
import s from './pieChart.module.css';
import ImagesPieChart from './ImagesPieChart';
import MainPieChart from './MainPieChart';

const pirCharts = [
  'Compute account by Cloud',
  'Compute account by organization',
  'VMs by organization',
  'EBS volumes by organization',
  'EBS capacity by organization',
  'Capacity by cloud',
  'Capacity by organization',
  'Objects by cloud',
  'Objects by organization',
  'Capacity by cloud',
  'Capacity by account',
  'Objects by cloud',
  'Objects by accounts',
  'Capacity by VPSA',
  'VPSAs by organization',
];

export default function CustomPieChart({ field }) {
  const maxValue = getMaxValue(data, field);

  return (
    <div className={s.main}>
      {pirCharts.includes(field) && <MainPieChart field={field} />}
      {field === 'VPSA images' && <ImagesPieChart field={field} />}
      {field === 'Capacity utilization' && <LoadingBarChart />}
      {field === 'Object Storage' && <CustomBarChart />}
      {field === 'VPSA images by organization' && <CustomBarChart />}
      {pirCharts.includes(field) && (
        <span className={s.value}>
          {maxValue}
          <br />
          {field === 'EBS capacity by organization' && (
            <span className={s.unit}>TiB</span>
          )}
          {field === 'Capacity by cloud' && <span className={s.unit}>TiB</span>}
          {field === 'Capacity by organization' && (
            <span className={s.unit}>TiB</span>
          )}

          {field === 'Capacity by account' && (
            <span className={s.unit}>TiB</span>
          )}
          {field === 'Capacity by VPSA' && <span className={s.unit}>TiB</span>}
          {field === 'Objects by cloud' && (
            <span className={s.unit}>Billion</span>
          )}
          {field === 'Objects by organization' && (
            <span className={s.unit}>Billion</span>
          )}
          {field === 'Objects by accounts' && (
            <span className={s.unit}>Billion</span>
          )}
        </span>
      )}
    </div>
  );
}

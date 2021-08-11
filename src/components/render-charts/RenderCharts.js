import CustomBarChart from '../bar-chart/BarChart';
import LoadingBarChart from '../bar-chart/LoadingBarChart';
import ImagesPieChart from '../pie-chart/ImagesPieChart';
import MainPieChart from '../pie-chart/MainPieChart';
import pirCharts from '../../data/pieCharts.json';
import s from './renderCharts.module.css';

export default function RenderCharts({ field }) {
  return (
    <div className={s.main}>
      {pirCharts.includes(field) && <MainPieChart field={field} />}
      {field === 'VPSA images' && <ImagesPieChart field={field} />}
      {field === 'Capacity utilization' && <LoadingBarChart />}
      {field === 'Object Storage' && <CustomBarChart />}
      {field === 'VPSA images by organization' && <CustomBarChart />}
    </div>
  );
}

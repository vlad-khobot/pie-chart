import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { PieChart, Pie, Tooltip } from 'recharts';
import data from '../../data/data.json';
import {
  getMaxValue,
  getVisibleUsers,
  getVPSAimagesData,
} from '../../helpers/funtions';
import { pieChartStyles } from '../../styles/pieChartStyles';
import CustomBarChart from '../barChart/BarChart';
import LoadingBarChart from '../barChart/LoadingBarChart';
import s from './pieChart.module.css';

const useStyles = makeStyles(() => pieChartStyles);
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
const VPSAdata = getVPSAimagesData(data, 'Compute A');

export default function CustomPieChart({ field }) {
  const maxValue = getMaxValue(data, field);
  const visibleUsers = getVisibleUsers(data, field);
  const classes = useStyles();

  return (
    <div className={s.main}>
      {pirCharts.includes(field) && (
        <>
          <div className={s.list}>
            <List className={classes.root}>
              {visibleUsers.map(({ user, fill }) => (
                <ListItem className={classes.listItem} key={user}>
                  <FiberManualRecordIcon
                    style={{ color: fill, fontSize: 10 }}
                  />
                  <Typography className={classes.text}>{user}</Typography>
                </ListItem>
              ))}
            </List>
          </div>
          <PieChart
            width={280}
            height={130}
            margin={{ top: 4, left: 25, bottom: 4, right: 25 }}
          >
            <Pie
              data={data}
              dataKey={field}
              nameKey="name"
              fill="fill"
              cx="75%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
            />
            <Tooltip wrapperStyle={{ zIndex: 1000 }} />
          </PieChart>
        </>
      )}

      {field === 'VPSA images' && (
        <>
          <div className={s.list}>
            <List className={classes.root}>
              {VPSAdata[0].arr.map(({ name, fill }) => (
                <ListItem className={classes.listItem} key={name}>
                  <FiberManualRecordIcon
                    style={{ color: fill, fontSize: 10 }}
                  />
                  <Typography className={classes.text}>{name}</Typography>
                </ListItem>
              ))}
            </List>
          </div>
          <PieChart
            width={280}
            height={130}
            margin={{ top: 4, left: 25, bottom: 4, right: 25 }}
          >
            <Pie
              data={VPSAdata[0].arr}
              dataKey="value"
              nameKey="name"
              fill="fill"
              cx="75%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
            />
            <Tooltip wrapperStyle={{ zIndex: 1000 }} />
          </PieChart>
          <span className={s.value}>{VPSAdata[0].total}</span>
        </>
      )}
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

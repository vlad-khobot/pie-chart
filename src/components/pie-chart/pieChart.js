import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { PieChart, Pie, Tooltip } from 'recharts';
import data from '../../data/data.json';
import { getMaxValue, getVisibleUsers } from '../../helpers/funtions';
import { pieChartStyles } from '../../styles/pieChartStyles';
import CustomBarChart from '../barChart/BarChart';
import s from './pieChart.module.css';

const useStyles = makeStyles(() => pieChartStyles);

export default function CustomPieChart({ field }) {
  const maxValue = getMaxValue(data, field);
  const visibleUsers = getVisibleUsers(data, field);
  const classes = useStyles();

  return (
    <div className={s.main}>
      {field !== 'Object Storage' && (
        <div className={s.list}>
          <List className={classes.root}>
            {visibleUsers.map(({ user, fill }) => (
              <ListItem className={classes.listItem} key={user}>
                <FiberManualRecordIcon style={{ color: fill, fontSize: 10 }} />
                <Typography className={classes.text}>{user}</Typography>
              </ListItem>
            ))}
          </List>
        </div>
      )}

      {field !== 'Object Storage' && (
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
      )}

      {field === 'Object Storage' && <CustomBarChart />}

      {field !== 'Object Storage' && (
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
          {field === 'Objects by cloud' && (
            <span className={s.unit}>Billion</span>
          )}
          {field === 'Objects by organization' && (
            <span className={s.unit}>Billion</span>
          )}
        </span>
      )}
    </div>
  );
}

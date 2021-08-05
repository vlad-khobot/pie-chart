import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { PieChart, Pie, Tooltip } from 'recharts';
import data from '../../data/data.json';
import { getMaxValue, getVisibleUsers } from '../../helpers/funtions';
import { pieChartStyles } from '../../styles/pieChartStyles';
import CustomBarChart from '../barChart/barChart';
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
          <div className={classes.scrollBar}>
            <List className={classes.root}>
              {visibleUsers.map(({ user, fill }) => (
                <ListItem className={classes.listItem} key={user}>
                  <FiberManualRecordIcon style={{ color: fill }} />
                  <Typography className={classes.text}>{user}</Typography>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      )}

      {field !== 'Object Storage' && (
        <PieChart width={300} height={180}>
          <Pie
            data={data}
            dataKey={field}
            nameKey="name"
            fill="fill"
            cx="75%"
            cy="50%"
            innerRadius={40}
            outerRadius={66}
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

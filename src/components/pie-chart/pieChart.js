import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { PieChart, Pie, Tooltip } from 'recharts';
import data from '../../data/data.json';
import s from './pieChart.module.css';

function getMaxValue(field) {
  return Math.max.apply(null, Object.values(data.map(obj => obj[field])));
}
function getVisibleUsers(field) {
  return data
    .filter(obj => obj[field] > 0)
    .map(user => {
      return {
        user: user.name,
        fill: user.fill,
      };
    });
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 120,
    zIndex: 1,
  },
  listItem: {
    padding: 0,
  },
  text: {
    fontSize: 14,
    color: '#979da4',
  },
}));

export default function CustomPieChart({ field }) {
  const maxValue = getMaxValue(field);
  const visibleUsers = getVisibleUsers(field);
  const classes = useStyles();
  console.log(visibleUsers);

  return (
    <div className={s.main}>
      <div className={s.list}>
        <List className={classes.root}>
          {visibleUsers.map(({ user, fill }) => (
            <ListItem className={classes.listItem} key={user}>
              <FiberManualRecordIcon style={{ color: fill }} />
              <Typography className={classes.text}>{user}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
      <PieChart width={300} height={160}>
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
        <Tooltip />
      </PieChart>
      <span className={s.value}>{maxValue}</span>
    </div>
  );
}

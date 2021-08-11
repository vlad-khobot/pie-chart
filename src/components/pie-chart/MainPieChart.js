import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { PieChart, Pie, Tooltip } from 'recharts';
import data from '../../data/data.json';
import { getMaxValue, getVisibleUsers } from '../../helpers/funtions';
import { pieChartStyles } from '../../styles/pieChartStyles';
import s from './pieChart.module.css';

const useStyles = makeStyles(() => pieChartStyles);

export default function MainPieChart({ field }) {
  const maxValue = getMaxValue(data, field);
  const visibleUsers = getVisibleUsers(data, field);
  const classes = useStyles();
  return (
    <>
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
        >
          {/* <Label width={30} position="center">
                {`${maxValue} `}
              </Label> */}
        </Pie>
        <Tooltip wrapperStyle={{ zIndex: 1000 }} />
      </PieChart>
    </>
  );
}

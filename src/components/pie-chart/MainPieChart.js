import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import { PieChart, Pie, Tooltip, Label } from 'recharts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import data from '../../data/data.json';
import pirCharts from '../../data/pieCharts.json';
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
          {pirCharts.includes(field) && (
            <Label
              fontFamily="sans-serif"
              fontSize={14}
              fontWeight="bold"
              fill="#e4e9eb"
              width={35}
              position="center"
            >
              {`${maxValue}
                ${field === 'Capacity by cloud' ? 'TiB' : ''}
                ${field === 'EBS capacity by organization' ? 'TiB' : ''}
                ${field === 'Capacity by organization' ? 'TiB' : ''}
                ${field === 'Capacity by account' ? 'TiB' : ''}
                ${field === 'Capacity by VPSA' ? 'TiB' : ''}${
                field === 'Objects by cloud' ? 'Billion' : ''
              }${field === 'Objects by organization' ? 'Billion' : ''}${
                field === 'Objects by accounts' ? 'Billion' : ''
              }`}
            </Label>
          )}
        </Pie>
        <Tooltip wrapperStyle={{ zIndex: 100 }} />
      </PieChart>
    </>
  );
}

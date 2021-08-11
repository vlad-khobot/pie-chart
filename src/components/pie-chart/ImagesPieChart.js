import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { PieChart, Pie, Tooltip } from 'recharts';
import data from '../../data/data.json';
import { getVPSAimagesData } from '../../helpers/funtions';
import { pieChartStyles } from '../../styles/pieChartStyles';

import s from './pieChart.module.css';

const useStyles = makeStyles(() => pieChartStyles);

const VPSAdata = getVPSAimagesData(data, 'Compute A');

export default function ImagesPieChart({ field }) {
  const classes = useStyles();
  return (
    <>
      <div className={s.list}>
        <List className={classes.root}>
          {VPSAdata[0].arr.map(({ name, fill }) => (
            <ListItem className={classes.listItem} key={name}>
              <FiberManualRecordIcon style={{ color: fill, fontSize: 10 }} />
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
  );
}

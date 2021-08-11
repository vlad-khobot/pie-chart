import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import { PieChart, Pie, Tooltip, Label } from 'recharts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import data from '../../data/data.json';
import { getVPSAimagesData } from '../../helpers/funtions';
import { pieChartStyles } from '../../styles/pieChartStyles';
import s from './pieChart.module.css';

const useStyles = makeStyles(() => pieChartStyles);

const VPSAdata = getVPSAimagesData(data, 'Compute A');

export default function ImagesPieChart() {
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
        >
          <Label
            fontFamily="sans-serif"
            fontSize={14}
            fontWeight="bold"
            fill="#e4e9eb"
            width={35}
            position="center"
          >
            {`${VPSAdata[0].total}`}
          </Label>
        </Pie>
        <Tooltip wrapperStyle={{ zIndex: 1000 }} />
      </PieChart>
    </>
  );
}

import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import CustomPieChart from '../pie-chart/PieChart';

const useStyles = makeStyles(() => ({
  bg: {
    background: '#202938',
  },
}));

export default function DashBoardBody({ titles }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {titles.map(title => (
        <Grid key={title} item xs>
          <Paper className={classes.bg} square>
            <CustomPieChart field={title} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

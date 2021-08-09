import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import CustomPieChart from '../pie-chart/PieChart';

const useStyles = makeStyles(() => ({
  bgBody: {
    background: '#202938',
  },
  bgHeader: {
    background: '#363e4c',
  },
  text: {
    color: '#e4e9eb',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    minWidth: 260,
    width: '100%',
    height: 14,
  },
}));

export default function DashBoardWrapper({ dashboard, titles }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {titles.map(title => (
        <Grid key={title} item>
          {dashboard === 'header' && (
            <Paper className={classes.bgHeader} square>
              <Box className={classes.text} p="10px">
                {title}
              </Box>
            </Paper>
          )}
          {dashboard === 'body' &&
            (title === '' ? (
              <></>
            ) : (
              <Paper className={classes.bgBody} square>
                <CustomPieChart field={title} />
              </Paper>
            ))}
        </Grid>
      ))}
    </Grid>
  );
}

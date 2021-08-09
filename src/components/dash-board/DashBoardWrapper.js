import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import CustomPieChart from '../pie-chart/PieChart';

const useStyles = makeStyles(() => ({
  bgBody: {
    background: '#202938',
  },
  openHeader: {
    background: '#363e4c',
  },
  hideHeader: {
    background: '#202938',
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

export default function DashBoardWrapper({ dashboard, titles, showBar }) {
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
            <Box
              className={showBar ? classes.openHeader : classes.hideHeader}
              p="10px"
            >
              <Typography className={classes.text}>{title}</Typography>
            </Box>
          )}
          {
            dashboard === 'body' && (
              // (title === '' ? (
              //   <></>
              // ) : (
              <Paper className={classes.bgBody} square>
                <CustomPieChart field={title} />
              </Paper>
            )
            // ))
          }
        </Grid>
      ))}
    </Grid>
  );
}

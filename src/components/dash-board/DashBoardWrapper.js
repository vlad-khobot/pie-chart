import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
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
    width: 1380,
    borderRadius: 10,
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
  plholder: {
    width: 280,
    height: 130,
    background: '#202938',
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
          {dashboard === 'body' &&
            (title === '' ? (
              <Box className={classes.plholder}></Box>
            ) : (
              <Box className={classes.plholder}>
                <CustomPieChart field={title} />
              </Box>
            ))}
        </Grid>
      ))}
    </Grid>
  );
}

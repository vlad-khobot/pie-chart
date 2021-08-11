import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import RenderCharts from '../render-charts/RenderCharts';

const useStyles = makeStyles(() => ({
  bgBody: {
    background: '#202938',
  },
  openHeader: {
    background: '#363e4c',
    width: 280,
    height: 30,
    display: 'flex',
    alignItems: 'center',
  },
  hideHeader: {
    background: '#202938',
    width: 1400,
    borderRadius: 10,
    height: 30,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#e4e9eb',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    minWidth: 260,
    width: '100%',
    marginLeft: 15,
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
            <Box className={showBar ? classes.openHeader : classes.hideHeader}>
              <Typography className={classes.text}>{title}</Typography>
            </Box>
          )}
          {dashboard === 'body' &&
            (title === '' ? (
              <Box className={classes.plholder}></Box>
            ) : (
              <Box className={classes.plholder}>
                <RenderCharts field={title} />
              </Box>
            ))}
        </Grid>
      ))}
    </Grid>
  );
}

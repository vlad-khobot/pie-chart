import { Box, Grid, Paper, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  bg: {
    background: '#363e4c',
  },
  text: {
    color: '#dadbde',
    fontFamily: 'sans-serif',
    fontWeight: 600,
  },
}));

export default function DashBoardHeader({ titles }) {
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
            <Box className={classes.text} p="10px">
              {title}
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

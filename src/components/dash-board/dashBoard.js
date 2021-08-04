import { Box, Paper } from '@material-ui/core';
import React from 'react';
import DashBoardBody from './dashBoardBody';
import DashBoardHeader from './dashBoardHeader';
import dashBoardTitles from '../../data/dashBoardTitle.json';

export default function DashBoard({ dashboardNumber }) {
  return (
    <>
      {dashboardNumber === 1 ? (
        <Box m={1}>
          <Paper elevation={10}>
            <DashBoardHeader titles={dashBoardTitles.firstDashboard} />
            <DashBoardBody titles={dashBoardTitles.firstDashboard} />
          </Paper>
        </Box>
      ) : (
        <Box m={1}>
          <Paper elevation={10}>
            <DashBoardHeader titles={dashBoardTitles.secondDashboard} />
            <DashBoardBody titles={dashBoardTitles.secondDashboard} />
          </Paper>
        </Box>
      )}
    </>
  );
}

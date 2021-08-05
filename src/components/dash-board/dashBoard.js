import { Box, IconButton, makeStyles, Paper } from '@material-ui/core';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import DashBoardBody from './dashBoardBody';
import DashBoardHeader from './dashBoardHeader';
import dashBoardTitles from '../../data/dashBoardTitle.json';
import './dashBoard.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles(() => ({
  arrow: {
    position: 'absolute',
    top: '4px',
    right: '10px',
    fontSize: '30px',
    background: 'gray',
    width: '30px',
    height: '30px',
  },
  dashboard: {
    position: 'relative',
    overflow: 'hidden',
  },
  arrowIcon: {
    fontSize: '30px',
  },
  dashboardHeader: {
    zIndex: 10000,
  },
}));

export default function DashBoard({ dashboardNumber }) {
  const classes = useStyles();
  const [showBar, setShowBar] = useState(true);
  const handleShowBar = () => {
    setShowBar(!showBar);
  };
  return (
    <>
      {dashboardNumber === 1 ? (
        <Box m={1}>
          <Paper square className={classes.dashboard} elevation={10}>
            <IconButton
              className={classes.arrow}
              aria-label="hide-show"
              onClick={handleShowBar}
            >
              {showBar ? (
                <KeyboardArrowUpSharpIcon className={classes.arrowIcon} />
              ) : (
                <KeyboardArrowDownSharpIcon className={classes.arrowIcon} />
              )}
            </IconButton>
            <DashBoardHeader
              className={classes.dashboardHeader}
              titles={dashBoardTitles.firstDashboard}
            />
          </Paper>
          <div className="body">
            <CSSTransition
              unmountOnExit
              in={showBar}
              timeout={200}
              classNames="dashBoard"
            >
              <DashBoardBody titles={dashBoardTitles.firstDashboard} />
            </CSSTransition>
          </div>
        </Box>
      ) : (
        <Box m={1}>
          <Paper square className={classes.dashboard} elevation={10}>
            <IconButton
              className={classes.arrow}
              aria-label="hide-show"
              onClick={handleShowBar}
            >
              {showBar ? (
                <KeyboardArrowUpSharpIcon className={classes.arrowIcon} />
              ) : (
                <KeyboardArrowDownSharpIcon className={classes.arrowIcon} />
              )}
            </IconButton>

            <DashBoardHeader
              className={classes.dashboardHeader}
              titles={dashBoardTitles.secondDashboard}
            />
          </Paper>
          <div className="body">
            <CSSTransition
              unmountOnExit
              in={showBar}
              timeout={200}
              classNames="dashBoard"
            >
              <DashBoardBody titles={dashBoardTitles.secondDashboard} />
            </CSSTransition>
          </div>
        </Box>
      )}
    </>
  );
}

import { Box, IconButton, makeStyles } from '@material-ui/core';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import dashBoardTitles from '../../data/dashBoardTitle.json';
import './dashBoard.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import DashBoardWrapper from './DashBoardWrapper';

const useStyles = makeStyles(() => ({
  arrow: {
    position: 'absolute',
    top: '6px',
    right: '10px',
    fontSize: '30px',
    background: 'gray',
    width: '16px',
    height: '16px',
  },
  dashboard: {
    position: 'relative',
  },
  arrowIcon: {
    fontSize: '30px',
  },
  openHeader: {
    background: '#363e4c',
  },
  hideHeader: {
    background: '#202938',
  },
}));

export default function DashBoard({ dashboard, user }) {
  const classes = useStyles();
  const [showBar, setShowBar] = useState(true);
  const handleShowBar = () => {
    setShowBar(!showBar);
  };
  return (
    <>
      <Box m={1} width={1400} className={classes.dashboard} borderRadius={10}>
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
        <DashBoardWrapper
          showBar={showBar}
          titles={
            showBar
              ? user === 'user'
                ? dashBoardTitles.user[dashboard]
                : dashBoardTitles.master[dashboard]
              : ['View Dashboard']
          }
          dashboard="header"
        />

        <CSSTransition
          unmountOnExit
          in={showBar}
          timeout={200}
          classNames="dashBoard"
        >
          <div className={'body'}>
            <DashBoardWrapper
              titles={
                user === 'user'
                  ? dashBoardTitles.user[dashboard]
                  : dashBoardTitles.master[dashboard]
              }
              dashboard="body"
            />
          </div>
        </CSSTransition>
      </Box>
    </>
  );
}

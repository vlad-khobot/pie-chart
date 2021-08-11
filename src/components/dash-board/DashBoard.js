import { Box, IconButton, makeStyles } from '@material-ui/core';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import dashBoardTitles from '../../data/dashBoardTitle.json';
import DashBoardWrapper from './DashBoardWrapper';
import { dashBoardStyles } from '../../styles/dashBoardStyles';
import './dashBoard.css';

const useStyles = makeStyles(() => dashBoardStyles);

export default function DashBoard({ dashboard, user }) {
  const classes = useStyles();
  const [showBar, setShowBar] = useState(true);
  const handleShowBar = () => {
    setShowBar(!showBar);
  };
  return (
    <>
      <Box m={1} width={1400} className={classes.dashboard}>
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

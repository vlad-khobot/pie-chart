import { makeStyles } from '@material-ui/core';
import React from 'react';
import DetailedInformation from './detailed-information/DetailedInformation';
import StatusBar from "./status-bar/StatusBar";
import mapImg from './common/mapImg.png'

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
    },
    backgroundMap : {
        height: "180px",
        backgroundColor: "grey",
        backgroundImage: `url(${mapImg})`,
    },
    detailedInfo: {
    }
}));

export default function IAMProfileInfo() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
          <div className={classes.backgroundMap}></div>

          <StatusBar/>

          <DetailedInformation/>
      </div>
  );
}
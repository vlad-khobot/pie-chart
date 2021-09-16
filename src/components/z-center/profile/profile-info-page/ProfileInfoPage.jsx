import { makeStyles } from '@material-ui/core';
import React from 'react';
import InformList from './InformList';
import StatusBar from "./StatusBar";
import mapImg from '../common/mapImg.png'

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

export default function ProfileInfoPage() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
          <div className={classes.backgroundMap}></div>

          <StatusBar/>

          <InformList/>
      </div>
  );
}
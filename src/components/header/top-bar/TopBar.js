import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import s from "./TopBar.module.css"
import ProfileInfoBlock from './ProfileInfoBlock';
import { makeStyles } from '@material-ui/core/styles';

let sampleData = {
  organizationInfo: {name: "NewWave Cloud Hosting", profilePageURL: "#", avatarLink:"#"},
  userInfo: {name: "Darlene Robertson", profilePageURL: "#", avatarLink:"#"},
};

const useStyles = makeStyles((theme) => ({
  iconArrow: {
      fontSize: "1rem",
  },
}));

export default function TopBar({organizationInfo = sampleData.organizationInfo, userInfo = sampleData.userInfo}) {

  const classes = useStyles();

  return (
    <div className={s.topBar} position="static">

        <div className={s.leftBlock}>

          <div className={s.backButton}>
            <IconButton  size='small' edge="start" color="inherit" aria-label="back">
              <ArrowBackIosIcon className={classes.iconArrow}/>
            </IconButton>
            <span>
              Back
            </span>
          </div>

          <div className={s.horizontalLine1}></div>

          <div className={s.serviceName}>
            <span>
              Zadara Cloud Services
            </span>
          </div>

        </div>

        <div className={s.clientBlock}>

          <ProfileInfoBlock profile={organizationInfo}/>
          <div className={s.horizontalLine2}></div>
          <ProfileInfoBlock profile={userInfo} />

        </div>



    </div>
  );
}

import { makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as AvatarTemplate} from "../common/avatarTemplate.svg";
import {ReactComponent as ApprovedIcon} from "../common/approvedIcon.svg";
import AccessStatus from '../common/AccessStatus';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        height: "75px",
        backgroundColor: "white",
        position: "relative",
        margin: "0 14px",
    },
    avatar: {
        bottom: "65px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "125px",
        height: "125px",
        border: "3px solid #1E6EB3",
        borderRadius: "50%",
        backgroundColor: "rgba(17, 24, 40, 1)",
    },
    approvedIcon: {
        position: "absolute",
        left: "90px", top: "25px",
    },
    statusBlock: {
        marginLeft: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        paddingBottom: "5px",
    },
    fullName: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: 900,
        fontSize: "18px",
        lineHeight: "22px",
        textTransform: "capitalize",
        color: "#1E96FC",
        margin: "8px 0 3px 0",
    },
    joinedInfo: {
        fontSize: "12px",
        paddingBottom: "5px",
        "& > span": {fontWeight: "bold"},
    }
}));

export default function StatusBar({approved, userName, dateJoined, accesType, userPhoto}) {

  const classes = useStyles();

  return (
      <div className={classes.root}>
            <div className={classes.avatar}>{userPhoto}</div>
            {approved && <ApprovedIcon  className={classes.approvedIcon}/>}
            <div className={classes.statusBlock}>
                <div className={classes.fullName}>{userName}</div>
                <div className={classes.joinedInfo}><span>Date joined</span> {dateJoined}</div>
                <AccessStatus accesType={accesType} />
            </div>
      </div>
  );
}


StatusBar.propTypes = {
    userName: PropTypes.string,
    dateJoined: PropTypes.any,
    accesType: PropTypes.string,
    userPhoto: PropTypes.object,
    approved: PropTypes.bool,
};

StatusBar.defaultProps = {
    userName: "Eleanor Pena",
    dateJoined: " July 14, 2015",
    userPhoto: <AvatarTemplate/>,
    approved: true,
};
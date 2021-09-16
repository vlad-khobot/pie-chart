import React from 'react';
import AccessStatus from '../common/AccessStatus';
import { makeStyles } from '@material-ui/core';
import AddUserIcon from '../common/AddUserIcon';
import {ReactComponent as AvatarTemplate} from "../common/avatarTemplate.svg"

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "9px 16px",
        margin: "0 14px",
        alignItems: "center",
        boxSizing: "border-box",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "5px",
        height: "120px",
    },
    photoWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        width: "66px",
        height: "66px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #1E6EB3",
        borderRadius: "35px",
        backgroundColor: "rgba(17, 24, 40, 1)",
    },
    profileName: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#FFFFFF",
        textAlign: "center",
        overflowWrap: "break-word",
    }
}));

export default function ProfileCard() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.photoWrap}>
                    <div className={classes.avatar}><AvatarTemplate/></div>
                    <AccessStatus small/>
                    <AddUserIcon/>
                </div>
                <span className={classes.profileName}>Darlene Robertson</span>
            </div>
        </>
    );
}
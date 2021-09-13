import React from 'react';
import { makeStyles } from '@material-ui/core';
import AddOrgIcon from '../icons/AddOrgIcon';
import SwitchOrgTab from './SwitchOrgTab';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        position: "relative",
        padding: "8px",
        boxSizing: "border-box",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "5px",
        minHeight: "120px",
        maxWidth: "450px",
        "& *": {
            boxSizing: "border-box",
        }
    },
    avatar: {
        minWidth: "98px",
        height: "98px",
        borderRadius: "50px",
        marginRight: "15px",
        backgroundColor: "rgba(17, 24, 40, 1)"
    },
    content: {
        display: "flex",
        flexDirection: "column",
    },
    switchSelector: {
        display: "flex",
        justifyContent: "flex-end",
        height: "15px"
    },
    orgInfo: {
        paddingTop: "5px",
        fontFamily: 'Roboto',
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        color: "white",
    },
    orgName: {
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
    },
    orgDescription: {
        fontWeight: 300, 
        fontSize: "12px", 
        lineHeight: "14px",
        marginRight: "32px",
    }

}));

export default function OrganizationCard() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.avatar}></div>
                <div className={classes.content}>
                    <div className={classes.switchSelector}>
                        <SwitchOrgTab/>
                        <AddOrgIcon/>
                    </div>
                    <div className={classes.orgInfo}>
                        <span className={classes.orgName}>NewWave Cloud Hosting</span>
                        <span className={classes.orgDescription}>Optimize your digital experiences on the server that’s right for your websites.
                        Save time and keep your site secure with managed upgrades and backups.
                        </span>
                    </div>
                </div>

            </div>
        </>
    );
}
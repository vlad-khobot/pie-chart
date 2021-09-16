import React from 'react';
import { makeStyles } from '@material-ui/core';
import NotificationLine from './NotificationLine';

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        flexDirection: "column",
        padding: "8px 19px 18px 19px",
        boxSizing: "border-box",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "5px",
        minHeight: "120px",
        color: "white"
    },
    title: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "21px",
        marginBottom: "5px"
    },
    notifications: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-between",
        "& > *": {
            marginBottom: "14px"
        },
        "& *:last-child": {
            marginBottom: "0"
        }
    }
}));

let notificationsTemplate = [
    { serviceMessage: true, amount: 3 },
    { serviceMessage: false, amount: 6},
];


export default function AlertsCard({ notifications = notificationsTemplate }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <span className={classes.title}>Alerts</span>
                <div className={classes.notifications}>
                    
                    {notifications 
                    ? notifications.map(elem => (
                        <NotificationLine serviceMessage={elem.serviceMessage} amount={elem.amount} key={elem.serviceMessage}/> ))
                    : <span>No alerts currently</span>
                }
                </div>
            </div>
        </>
    );
}
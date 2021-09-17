import React from 'react';
import { makeStyles } from '@material-ui/core';
import VerticalLine from '../../common/VerticalLine';

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderLeft: "4px solid #51C927",
        borderRadius: "5px",
        height: "26px",
        width: "410px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "14px",
    },
    message: {
        paddingLeft: "13px",
    },
    viewBlock: {
        display: "flex",
        alignItems: "center",
    },
    view: {
        padding: "6px 20px 6px 11px"
    },
}));

export default function NotificationLine({serviceMessage, amount}) {
    const classes = useStyles();

    return (
        <>
            <div  style={{borderLeft: `4px solid ${serviceMessage ? "#F7D20F" : "#51C927"}`}} className={classes.root}>
                <div className={classes.message}>
                   {`You have `} 
                   <b>{amount}</b>
                   {`${ serviceMessage ? ' services requiring attention' : ' new notifications'}`}
                </div>
                <div className={classes.viewBlock}>
                    <VerticalLine height="26px" color="white"/>
                    <div className={classes.view}>View</div>
                </div>
            </div>
        </>
    );
}
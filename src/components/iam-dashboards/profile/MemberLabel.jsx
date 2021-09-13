import {  makeStyles } from '@material-ui/core';
import React from 'react';
import UserLabelIcon from '../icons/UserLabelIcon';

const useStyles = makeStyles(() => ({
    root: {
        boxSizing: "border-box",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        bottom: "8px",
        height: "15px",
        fontFamily: 'Roboto',
        fontSize: '6.5px',
        color: '#1E6EB3',
        border: "none",
        borderRadius: "7px",
        paddingLeft: "1px",
        "&:hover": {
            boxShadow: '1px 1px 2px #1E6EB3',
        }
       },
       iconWrap: {
           backgroundColor: "rgba(30, 150, 252, 0.2)",
           display: "block",
           width: "13px",
           height: "13px",
           borderRadius: "6px",
           marginRight: "3px",
       }

}));



export default function MemberLabel() {
      const classes = useStyles();

    return (
        <> 
            <button className={classes.root}>
                <div className={classes.iconWrap}><UserLabelIcon/></div>
            Member
            </button>
        </>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    customButton: {
        boxSize: "border-box",
        display: 'flex',
        alignItems: 'center',
        height: "40px",
        padding: "11px",
        borderRadius: "10px",
        marginLeft: "13px",
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#EBEBEB',
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        "&:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(30, 150, 252, 0.5)',
        },
        "&:active": {
            backgroundColor: "rgba(30, 150, 252, 1)",
        }
    }
}));

export default function ToolbarButton({children}) {

    const classes = useStyles();

    return (
        <button className={classes.customButton}>
            {children}
        </button>
    )
}
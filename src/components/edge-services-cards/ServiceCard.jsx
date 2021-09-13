import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as ComputeIcon } from "./icons/ComputeIcon.svg";

const useStyles = makeStyles(() => ({
    root: {
        "& div": {
            display: "flex",
            boxSizing: "border-box",
        },
        display: "flex",
        alignItems: 'stretch',
        flexDirection: "column",
        boxSizing: "border-box",
        color: "white",
        background: 'linear-gradient(122.62deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 100%)',
        filter: 'drop-shadow(0px 0px 5.21978px rgba(0, 0, 0, 0.15))',
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, 0.6)",

        width: "300px",
        minHeight: "120px",
    },
    titleRoot: {
        justifyContent: "flex-start",
        alignItems: "center",
        background: 'rgba(30, 150, 252, 1)',
        borderRadius: "4px 4px 0 0",
        boxShadow: '0px 0px 5.21978px rgba(0, 0, 0, 0.15)',
        height: '40px',
        fontWeight: "bold", fontSize: "13px", lineHeight: "16px"
    },

    titleContent: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: "220px",
        padding: "10px",
        "& span": {
            paddingLeft: "9px",
        }
    },
    descriptionRoot: {
        borderTop: "1px solid #65646D",
        flexGrow: 1,
        fontSize: "14px",
    },
    descriptionContent: {
        padding: '10px',
    },
}));

export default function ServieCard() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>

                <div className={classes.titleRoot}>
                    <div className={classes.titleContent}>
                        <ComputeIcon />
                        <span>Cost Explorer</span>
                    </div>
                </div>

                <div className={classes.descriptionRoot}>
                    <div className={classes.descriptionContent}>
                        View and export your invoices, cost projections, and usage data.
                    </div>
                </div>

            </div>

        </>
    );
}
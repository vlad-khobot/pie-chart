import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as CloseIcon } from './closeIcon.svg';

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: "white",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        border: "1px solid white",
    },
    header: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: 54,
        paddingLeft: 21,
        fontFamily: "Lato",
        color: "white",
        fontSize: "24px",
        lineHeight: "29px",
        backgroundColor: "#111828",
        "& > svg": {position: "absolute", right: 9, top: 8,}
    },

}));

export default function IdentityProviders({ providerName, }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.header}>Invite User <CloseIcon/></div>

            

        </div>
    );
}
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "flex-end",
        marginTop: 70,
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        color: "#FFFFFF",
        textAlign: "right",
        "& img": {
            backgroundColor: "grey",
        },
        "& > div": {
            paddingRight: "78px",
        }
    },
    newsTitle: {
        fontFamily: "Lato",
        fontSize: "28px",
        lineHeight: "34px",
    },
    newsLink: {
        paddingTop: 13,
        fontSize: '15px',
        lineHeight: '17px',
    }
}));

export default function Banner() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <div className={classes.newsTitle}>Join us and #alfaromeoracingorlen
                    this weekend at the  #frenchGP</div>
                <div className={classes.newsLink}>Want to know more ?</div>
            </div>
            <img height="198" width="715" alt="news"/>
        </div>
    )

}
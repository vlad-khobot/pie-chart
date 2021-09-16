import { makeStyles } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ReactComponent as PrevIcon } from "./prevIcon.svg";
import { ReactComponent as NextIcon } from "./nextIcon.svg";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "flex-end",
        boxSizing: "border-box",
        height: 200,
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        color: "#FFFFFF",
        textAlign: "right",
        "& img": {
            backgroundColor: "grey",
        },
        "& > div": {
            paddingRight: "78px",
        },
    },
    newsTitle: {
        fontFamily: "Lato",
        fontSize: "28px",
        lineHeight: "34px",
        "& span": { color: "#d1df10" }
    },
    newsLink: {
        paddingTop: 13,
        fontSize: '15px',
        lineHeight: '17px',
    },
    carousel: {
        marginTop: 70,
        "& .MuiIconButton-root": {
            backgroundColor: "rgba(0, 0, 0, 0)",
        }
    }
}));

export default function Banner() {

    const classes = useStyles();

    return (
        <Carousel PrevIcon={<PrevIcon />} NextIcon={<NextIcon />} className={classes.carousel} autoPlay={false} indicators={false} animation="slide" navButtonsAlwaysVisible>


            <div className={classes.root}>
                <div>
                    <div className={classes.newsTitle}>Join us and <span>#alfaromeoracingorlen</span> this weekend at the <span>#frenchGP</span></div>
                    <div className={classes.newsLink}>Want to know more ?</div>
                </div>
                <img src="http://placehold.it/715x198" height="100%" width="50%" alt="news" />
            </div>
            <div className={classes.root}>
                <div>
                    <div className={classes.newsTitle}>We have good news for you!</div>
                    <div className={classes.newsLink}>Want to know more ?</div>
                </div>
                <img src="http://placehold.it/715x198" height="100%" width="50%" alt="news" />
            </div>


        </Carousel>
    )

}
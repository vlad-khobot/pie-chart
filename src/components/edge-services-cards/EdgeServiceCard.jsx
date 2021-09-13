import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as PrivateStorageIcon } from "./icons/PrivateStorageIcon.svg";
import { ReactComponent as AddIcon } from "./icons/AddIcon.svg"
import HorizontalLine from '../common/HorizontalLine';

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
        background: 'rgba(255, 255, 255, 0.1)',
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
    titleAmount: {
        margin: "auto",
        fontWeight: 900, fontSize: "24px"
    },
    descriptionRoot: {
        borderTop: "1px solid #65646D",
        flexGrow: 1,
        fontSize: "10px",
    },
    descriptionContent: {
        padding: '10px',
        width: "220px",
    },
    buttonBlock: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    button: {
        color: "#BEBEBE",
        fontSize: "12px",
        marginRight: "10px",
        marginLeft: "10px",
        marginBottom: "10px",
        width: "50px",
        height: "20px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    btnActive: {
        backgroundColor: "rgba(30, 150, 252, 0.8)",
        color: "white",
    },
    inactive: {
        color: "#1E96FC",
        backgroundColor: "white",
        borderRadius: "4px 4px 0 0",
    }
}));


export default function EdgeServicesCard({options}) {
    const classes = useStyles();

    

    return (
        <>
            {/* active card */}
            <div className={classes.root}>

                <div className={classes.titleRoot}>
                    <div className={classes.titleContent}>
                        <PrivateStorageIcon />
                        <span>Private Object Storage</span>
                    </div>
                    <HorizontalLine color="white" height="25px" />
                    <div className={classes.titleAmount}>
                        7
                    </div>
                </div>

                <div className={classes.descriptionRoot}>
                    <div className={classes.descriptionContent}>
                        A virtual object storage that supports both HDD and SSD, offering S3 and Swift compatible Object Storage with private and dedicated resources.

                    </div>
                    <HorizontalLine color="#65646D" height="60px" />
                    <div className={classes.buttonBlock}>
                        <button className={classes.button}>View</button>
                        <button className={`${classes.button} ${classes.btnActive}`}>Create</button>
                    </div>
                </div>

            </div>
            {/* inactive card */}
            <div className={classes.root}>

                <div className={`${classes.titleRoot} ${classes.inactive}`}>
                    <div className={classes.titleContent}>
                        <PrivateStorageIcon />
                        <span>Private Object Storage</span>
                    </div>
                    <HorizontalLine color="#EBEBEB" height="25px" />
                    <div className={classes.titleAmount}>
                        <AddIcon />
                    </div>
                </div>

                <div className={classes.descriptionRoot}>
                    <div className={classes.descriptionContent}>
                        A virtual object storage that supports both HDD and SSD, offering S3 and Swift compatible Object Storage with private and dedicated resources.

                    </div>
                    <HorizontalLine color="#65646D" height="60px" />
                    <div className={classes.buttonBlock}>
                        <button className={`${classes.button} ${classes.btnActive}`}>Create</button>
                    </div>
                </div>

            </div>
        </>
    );
}
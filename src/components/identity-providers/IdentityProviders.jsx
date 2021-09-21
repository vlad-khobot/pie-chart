import { makeStyles } from '@material-ui/core';
import React from 'react';
import ProviderCard from './provider-card/ProviderCard';
import { ReactComponent as CloseIcon } from './closeIcon.svg';

const useStyles = makeStyles(() => ({
    root: {
        display: "inline-flex",
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: "white",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
    providersBlock: {
        padding: "27px 24px 0 24px",
    },
    providersRow: {
        display: "flex",
        flexWrap: "wrap",
        "& > div:last-child": {
            marginRight: 0,
        }
    },
    downloadTitle: {
        fontWeight: 300,
        fontSize: 24,
        borderTop: "1px solid #DADADA",
        paddingTop: 13, paddingBottom: 27,
    }
}));

export default function IdentityProviders({handleClose}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.header}>Identity Providers <CloseIcon onClick={handleClose}/></div>

            <div className={classes.providersBlock}>

                <div className={classes.providersRow}>
                    <ProviderCard typeName="Active Directory" providerName="ENYOI.ORG" />
                    <ProviderCard isSystem typeName="Local" />
                </div>

                <div className={classes.downloadTitle}>Identity Providers Downloads</div>

                <div className={classes.providersRow}>
                    <ProviderCard downloads typeName="Downloads" />
                </div>
            </div>

        </div>
    );
}
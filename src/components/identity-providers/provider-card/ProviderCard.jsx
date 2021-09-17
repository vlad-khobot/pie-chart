import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as DeleteIcon } from './deleteIcon.svg';
import { ReactComponent as EditIcon } from './editIcon.svg';

const useStyles = makeStyles(() => ({
    provider: {
        position: "relative",
        marginRight: "15px",
        border: "1px solid #DADADA",
        borderRadius: "5px",
        padding: "8px 14px 13px 14px",
        marginBottom: 35,
    },
    serviceTitle: {
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        textTransform: "uppercase"
    },
    downloadTitle: {fontWeight: 400, textTransform: "capitalize", },
    avatar: {
        marginRight: "12px",
        height: 60,
        width: 60,
        border: "1px solid #DADADA",
    },
    buttonsBlock: {
        marginTop: 10,
        display: "flex",
        "& > button": {
            fontFamily: "Roboto", fontSize: "14px", color: "white",
            display: "flex",
            alignItems: "center",
            padding: "7px 17px",
            borderRadius: "15px",
            border: "none",
            marginLeft: "30px",
            "&:first-child":{
                margin: "0",
            }
        }
    },
    buttonActive: { backgroundColor: "#1E96FC" },
    buttonLocal: { backgroundColor: "#6A6874" },
    buttonDownload: { backgroundColor: "#D2EAFE", color: "#1E6EB3 !important",},
    disabled: { opacity: 0.5 },
    editsIcons: {
        position: "absolute",
        right: 0, top: 5,
        "& > *": { marginRight: 6 }
    },
}));

export default function ProviderCard({ providerName, isActive, isSystem, downloads, typeName}) {
  
    const classes = useStyles();

    let titleClass = downloads ? `${classes.serviceTitle} ${classes.downloadTitle}` : classes.serviceTitle;

    return (
        <div className={classes.provider}>

            <div className={titleClass}>
                <Avatar className={classes.avatar} alt='service'>
                    {providerName[0]}
                </Avatar>
                {isActive && `${typeName} `} {providerName}
            </div>

            <div className={classes.editsIcons}>
                {!downloads && <EditIcon />}
                {!isSystem && !downloads && <DeleteIcon />}
            </div>

            <div className={classes.buttonsBlock}>
                {downloads
                    ? <button className={classes.buttonDownload}>
                       Active Directory Identity Provider (Version 1.0.0.2)
                      </button>
                    :
                    <>
                        <button className={classes.buttonActive}>Enebled</button>
                        <button className={classes.buttonLocal}>{typeName}</button>

                        {isSystem && <button className={`${classes.buttonActive} ${classes.disabled}`}>System</button>}
                    </>}

            </div>
        </div>

    );
}

ProviderCard.defaultProps = {
    providerName: "",
    typeName: "",
    isActive: true,
    isSystem: false,
    downloads: false,
};
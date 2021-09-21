import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import MyButton from '../../common/UI/MyButton';
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
        textTransform: "uppercase",
        paddingRight: 60,
    },
    downloadTitle: { fontWeight: 400, textTransform: "capitalize", },
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
            marginLeft: "30px",
            "&:first-child": {
                margin: "0",
            }
        }
    },
    editsIcons: {
        position: "absolute",
        right: 0, top: 5,
        "& > *": { marginRight: 6 }
    },
}));

export default function ProviderCard({ providerName, isActive, isSystem, downloads, typeName }) {

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
                    ? <MyButton buttonStyle="download">
                        Active Directory Identity Provider (Version 1.0.0.2)
                    </MyButton>
                    :
                    <>
                        <MyButton>Enebled</MyButton>
                        <MyButton buttonStyle="semi">{typeName}</MyButton>

                        {isSystem && <MyButton disabled>System</MyButton>}
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
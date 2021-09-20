import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "Roboto", fontSize: "14px", color: "white",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1E96FC",
        padding: "7px 17px",
        borderRadius: "15px",
        border: "none",
        cursor: 'pointer',
        "&:disabled":{opacity: 0.5, backgroundColor: "#1E96FC", color: "white"}
    },
    semiActiveButton: { 
        backgroundColor: "rgba(96, 96, 99, 1)", 
        color: "white",
    },
    disabledButton: { 
        backgroundColor: "rgba(218, 218, 218, 1)", 
        color: "rgba(96, 96, 99, 1)",  
        cursor: 'auto' },
    deleteButton: { 
        backgroundColor: "rgba(227, 28, 28, 1)"
    },
    downloadButton: {
        backgroundColor: "#D2EAFE",
        color: "rgba(30, 110, 178, 1)",
    }
}));

export default function MyButton({ buttonStyle, children, type, ...props }) {

    const classes = useStyles();

    let classButton;

    switch (buttonStyle) {
        case "semi":
            classButton = `${classes.root} ${classes.semiActiveButton}`; 
            break;
        case "disabled":
            classButton = `${classes.root} ${classes.disabledButton}`; 
            break;
        case "delete":
            classButton = `${classes.root} ${classes.deleteButton}`; 
            break;
        case "download":
            classButton = `${classes.root} ${classes.downloadButton}`;
            break;
        default:
            classButton = classes.root;
    }

    classButton = props.disabled ? `${classes.root} ${classes.disabledButton}` : classButton;

    return (
        <button type={type} {...props} className={classButton} >{children}</button>
    )
}

MyButton.defaultProps = {
    children: "Button",
    type: "button",
};
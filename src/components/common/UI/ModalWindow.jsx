import { Dialog, makeStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as CloseIcon } from './closeIcon.svg';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: "white",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: "Lato",
        fontSize: 16,
        minWidth: 800,
    },
    header: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: 54,
        paddingLeft: 21,
        color: "white",
        fontSize: 24,
        lineHeight: "29px",
        backgroundColor: "#111828",
        "& > svg": { position: "absolute", right: 9, top: 8, }
    },
    dialogWindow:{
        "& .MuiDialog-paperWidthSm": {
            maxWidth: "none",
        },
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(76,79,86, 0.5)",
        }
    }
}));

export default function ModalWindow({ children,  title, onClose, open, ...props }) {

    const classes = useStyles();

    return (
        <Dialog open={open} onClose={onClose} {...props} className={classes.dialogWindow}>

            <div className={classes.root}>

                <div className={classes.header}>{title}<CloseIcon onClick={onClose}/></div>
                { children }
                
            </div>

        </Dialog>
    )
}

ModalWindow.defaultProps = {
    open: false,
};
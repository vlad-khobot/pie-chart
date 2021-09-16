import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import {ReactComponent as UserLabelIcon} from './userLabelIcon.svg';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        fontFamily: 'Roboto',
        fontSize: '12px',
        color: '#1E6EB3',
        borderRadius: "12px",
        padding: "1px 5px 1px 1px"
    },

    iconWrap: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        marginRight: "3px",
    },
    rootSmall: {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        position: "relative",
        bottom: "8px",
        fontFamily: 'Roboto',
        fontSize: '8px',
        color: '#1E6EB3',
        borderRadius: "12px",
        padding: "1px 5px 1px 1px"
    },
    iconWrapSmall: {
        width: "13px",
        height: "13px",
        borderRadius: "50%",
        marginRight: "3px",
    }

}));



export default function AccessStatus({ accesType, small }) {
    const classes = useStyles();

    let iconBackgroundColor, roleName, iconClass, rootClass;
    if (small) {
        iconClass = classes.iconWrapSmall;
        rootClass = classes.rootSmall;
    } else {
        iconClass = classes.iconWrap;
        rootClass = classes.root;
    }

    switch (accesType) {
        case "admin":
            iconBackgroundColor = "rgba(30, 150, 252, 0.2)";
            roleName = "Admin";
            break;

        case "member":
            iconBackgroundColor = "rgba(96, 96, 99, 0.3)";
            roleName = "Member";
            break;

        case "view":
            iconBackgroundColor = "rgba(247, 238, 15, 0.5)";
            roleName = "View only";
            break;

        case "navigate":
            iconBackgroundColor = "rgba(8, 173, 54, 0.5)";
            roleName = "Navigate";
            break;

        default:
            break;
    }

    return (
        <>
            <span className={rootClass}>
                <span style={{ backgroundColor: iconBackgroundColor }} className={iconClass}><UserLabelIcon /></span>
                {roleName}
            </span>
        </>
    );
}

AccessStatus.propTypes = {
    accesType: PropTypes.string,
};

AccessStatus.defaultProps = {
    accesType: "admin",
};
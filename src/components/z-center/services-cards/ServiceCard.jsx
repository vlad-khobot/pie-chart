import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as AddIcon } from "./icons/addIcon.svg"
import HorizontalLine from '../../common/HorizontalLine';
import { serviceCardStyles } from './serviceCardStyles';

const useStyles = makeStyles(() => (serviceCardStyles));

export default function ServiceCard({ title, amount, description, icon, ...restProps }) {
    const classes = useStyles();

    let titleClass, descriptionClass;
    if (amount === 0) {
        titleClass = classes.inactiveRoot;
        descriptionClass = classes.descriptionContent;
    } else if (amount > 0) {
        titleClass = classes.activeRoot;
        descriptionClass = classes.descriptionContent;
    } else {
        titleClass = classes.emptyService;
        descriptionClass = classes.fullDescriptionContent;
    }


    return (
        <>
            <div className={classes.root}>

                <div className={titleClass}>
                    <div className={classes.titleContent}>
                        {icon}
                        <span>{title}</span>
                    </div>
                    {amount !== null &&
                        <>
                            <HorizontalLine color="#EBEBEB" height="25px" />
                            <div className={classes.titleAmount}>
                                {amount > 0 ? amount : <AddIcon />}
                            </div>
                        </>
                    }
                </div>

                <div className={classes.descriptionRoot}>
                    <div className={descriptionClass}>
                        {description}
                    </div>
                    {amount !== null &&
                        <>
                            <HorizontalLine color="#65646D" height="60px" />
                            <div className={classes.buttonBlock}>
                                {amount > 0 && <button className={classes.button}>View</button>}
                                <button className={`${classes.button} ${classes.btnActive}`}>Create</button>
                            </div>
                        </>
                    }


                </div>

            </div>
        </>
    );
}

ServiceCard.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    description: PropTypes.string,
    icon: PropTypes.object,
};

ServiceCard.defaultProps = {
    title: "No service",
    amount: null,
    description: "No description",
    icon: null,
};
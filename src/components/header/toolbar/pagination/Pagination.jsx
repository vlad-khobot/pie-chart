import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as ArrowBack} from './arrowBack.svg';
import { ReactComponent as ArrowNext} from './arrowNext.svg';

const useStyles = makeStyles(() => ({
    root: {
        height: 30,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxSizing: "border-box",
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: 14,
        padding: "8px 10px",
        wordSpacing: 8,
        marginRight: 10,
    },
    icons: {
        marginLeft: 15,
    }
}));

export default function Pagination({currentPage, totalPages}){

    const classes = useStyles()

    return(
        <div className={classes.root}>
            {currentPage} of {totalPages} <ArrowBack className={classes.icons}/> <ArrowNext className={classes.icons}/>
        </div>
    )
}

Pagination.defaultProps = {
    currentPage: 1,
    totalPages: 4,
};
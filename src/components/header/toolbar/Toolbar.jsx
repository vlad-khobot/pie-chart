import { Grid, IconButton, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import React, { useCallback, useState } from 'react';
import InventoryBar from './InventoryBar';
import MultiFilter from './MultiFilter';



const useStyles = makeStyles((theme) => ({
    button: {
        height: "40px",
        padding: "12px",
        borderRadius: "10px",
        marginLeft: "13px",
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#EBEBEB',
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
    },
    buttonIcon: {
        fontSize: "1.3rem",
        marginRight: "5px",
    },
    margin: {
        marginTop: "18px",
    },


}));


export default function Toolbar() {
    const classes = useStyles()
    const [filters, setFilters] = useState([]);

    const onFilter = useCallback((_, value) => {
        setFilters(value);
    }, []);

    return (
        <>
            <InventoryBar />
            <Grid className={classes.margin} container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                    <Grid container>
                        <MultiFilter value={filters} onChange={onFilter} />
                        <IconButton className={classes.button}>
                            <AddIcon className={classes.buttonIcon} />
                            Create New
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid item>
                    <IconButton className={classes.button}>
                        <VerticalAlignTopIcon className={classes.buttonIcon} />
                        Export
                    </IconButton>

                    <IconButton className={classes.button}>
                        <FormatAlignJustifyIcon className={classes.buttonIcon} />
                        Display
                    </IconButton>
                </Grid>

            </Grid>
        </>
    );
}

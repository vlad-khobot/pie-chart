import { Grid, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback, useState } from 'react';
import InventoryBar from './InventoryBar';
import MultiFilter from './MultiFilter';
import { toolBarStyles } from './toolBarStyles';
import ExportIcon from './icons/ExportIcon';
import DisplayIcon from './icons/DisplayIcon';


const useStyles = makeStyles((theme) => (toolBarStyles));



export default function Toolbar() {

    const classes = useStyles()
    const [filters, setFilters] = useState([]);

    const onFilter = useCallback((_, value, reason) => {
        setFilters(value);
    }, []);

    return (
        <>
            <InventoryBar />
            <Grid className={classes.margin} container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                    <Grid container>
                        <MultiFilter filters={filters} onFilter={onFilter} />
                        <button className={classes.customButton}>
                            <AddIcon/>
                            Create New
                        </button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <button className={classes.customButton}>
                            <ExportIcon/>
                            Export
                        </button>
                        <button className={classes.customButton}>
                            <DisplayIcon/>
                            Display
                        </button>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

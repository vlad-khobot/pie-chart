import { Grid, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback, useState } from 'react';
import InventoryBar from './inventory-bar/InventoryBar';
import MultiFilter from './filter/MultiFilter';
import ExportIcon from './icons/ExportIcon';
import DisplayIcon from './icons/DisplayIcon';
import Pagination from './pagination/Pagination';
import ToolbarButton from './buttons/ToolbarButton';
import {ReactComponent as IDPicon} from "./icons/idp.svg"


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: "18px 0",
    },
}));



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
                        <ToolbarButton>
                            <AddIcon />
                            Invite User
                        </ToolbarButton>
                        <ToolbarButton>
                            <IDPicon style={{marginRight: 3}}/>
                            IDP
                        </ToolbarButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center">
                        <Pagination />
                        <ToolbarButton>
                            <ExportIcon />
                            Export
                        </ToolbarButton>
                        <ToolbarButton>
                            <DisplayIcon />
                            Display
                        </ToolbarButton>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

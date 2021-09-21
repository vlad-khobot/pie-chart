import { Dialog, Grid, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback, useState } from 'react';
import InventoryBar from './inventory-bar/InventoryBar';
import MultiFilter from './filter/MultiFilter';
import ExportIcon from './icons/ExportIcon';
import DisplayIcon from './icons/DisplayIcon';
import Pagination from './pagination/Pagination';
import ToolbarButton from './buttons/ToolbarButton';
import { ReactComponent as IDPicon } from "./icons/idp.svg"
import InviteUser from '../../services-components/iam/invite-user/InviteUser';
import IdentityProviders from '../../identity-providers/IdentityProviders';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: "18px 0",
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



export default function Toolbar() {

    const classes = useStyles()
    const [filters, setFilters] = useState([]);


    const onFilter = useCallback((_, value, reason) => {
        setFilters(value);
    }, []);

    //invite window
    const [inviteOpen, setOpenInvite] = React.useState(false);

    const handleClickOpenInvite = () => {
        setOpenInvite(true);
    };

    const handleCloseInvite = () => {
        setOpenInvite(false);
    };

    //IDP window

    const [providersOpen, setProvidersOpen] = React.useState(false);

    const handleClickOpenIDP = () => {
        setProvidersOpen(true);
    };

    const handleCloseIDP = () => {
        setProvidersOpen(false);
    };

    return (
        <>
            <InventoryBar />
            <Grid className={classes.margin} container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                    <Grid container>
                        <MultiFilter filters={filters} onFilter={onFilter} />
                        <ToolbarButton onClick={handleClickOpenInvite}>
                            <AddIcon />
                            Invite User
                        </ToolbarButton>
                        <ToolbarButton onClick={handleClickOpenIDP}>
                            <IDPicon style={{ marginRight: 3 }} />
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

            <Dialog className={classes.dialogWindow} open={inviteOpen} onClose={handleCloseInvite}>
                <InviteUser handleClose={handleCloseInvite}/>
            </Dialog>
            <Dialog className={classes.dialogWindow} open={providersOpen} onClose={handleCloseIDP}>
                <IdentityProviders handleClose={handleCloseIDP}/>
            </Dialog>
        </>
    );
}

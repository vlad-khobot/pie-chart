import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Avatar } from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ReactComponent as ArrowDownIcon } from './icons/arrowDownIcon.svg';
import { ReactComponent as CloseDialogIcon } from './icons/closeDialogIcon.svg';

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    position: "relative",
    "& .MuiDialog-paper": {
      width: "447px",
      height: "358px",
    },
    "& .MuiTypography-root": {
      color: "rgba(30, 110, 178, 1)",
      fontFamily: "Roboto",
      fontWeight: '400',
      fontSize: "30px",
    },
    "& .MuiInputBase-root": {
      fontSize: "16px",
      height: "60px",
      width: "390px",
      marginRight: "10px",
      border: "1px solid rgba(218, 218, 218, 1)",
    },
    "& .MuiFormLabel-root": {
      color: "black",
    },
    "& .MuiSelect-select": {
      paddingLeft: "10px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "&:focus": {
        backgroundColor: "white"
      },
    },
    "& .MuiDialogActions-root": {
      borderTop: "1px solid #E4E9EB",
    },
  },
  closeIcon: {
    position: "absolute",
    right: "6px",
    top: "6px",
  },
  switchButton: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "103px",
    height: "18px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: '4px',
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "rgba(209, 213, 224, 1)",
    fontFamily: "Roboto",
    fontSize: "9px",
    lineHeight: "11px",
    position: "absolute",
    right: "32px",
    top: "8px",
  },
  dialogButtons: {
    textTransform: "uppercase",
    fontSize: '12px',
    fontFamily: "Roboto",
    fontWeight: '400',
    width: "92px",
    height: "30px",
    color: "white",
    backgroundColor: "rgba(30, 150, 252, 0.8)",
    borderRadius: "15px",
    border: 0,
  },
  small: {
    width: "25px",
    height: "25px",
    marginRight: "10px",
    fontSize: "1rem",
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: "16px",
    marginBottom: "8px",
  },
  dialogMenu: {
    border: "1px solid red"
  }
}));

export default function SwitchOrgTab() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [organization, setOrg] = React.useState('');

  const handleChange = (event) => {
    setOrg(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.switchButton} onClick={handleClickOpen}>
        <div>Switch Organization</div>
        <ArrowDownIcon />
      </div>

      <Dialog className={classes.dialogRoot} open={open} onClose={handleClose}>

        <DialogTitle>Switch Organization</DialogTitle>
        <div className={classes.closeIcon} onClick={handleClose}>
          <CloseDialogIcon />
        </div>

        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <span className={classes.inputLabel}>Select organization to switch to</span>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={organization}
                onChange={handleChange}
                input={<Input disableUnderline/>}
                IconComponent={KeyboardArrowUpIcon}

                MenuProps={{
                  variant:"menu",
                  className: "dialog-menu",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}><Avatar className={classes.small} alt={"NewWave Cloud Hosting"}>N</Avatar>NewWave Cloud Hosting</MenuItem>
                <MenuItem value={20}><Avatar className={classes.small} alt={"Abstergo Ltd"}>A</Avatar>Abstergo Ltd.</MenuItem>
                <MenuItem value={30}><Avatar className={classes.small} alt={"Biffco Enterprises Ltd."}>B</Avatar>Biffco Enterprises Ltd.</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions >
          <button className={classes.dialogButtons} onClick={handleClose} color="primary">
            Cancel
          </button>
          <button className={classes.dialogButtons} onClick={handleClose} color="primary">
            Ok
          </button>
        </DialogActions>

      </Dialog>
    </>
  );
}

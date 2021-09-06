/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FilterIcon from "../../common/FilterIcons";
import ClearIcon from '@material-ui/icons/Clear';
import { useCallback } from "react";


const AutocompleteMy = withStyles({
  root: {

  },
  inputRoot: {
    borderRadius: "10px",
    width: '278px',
    height: "40px",
    color: "white",
    fontSize: "15px",
    fontFamily: "inter",
  },
  listbox: {
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(209, 213, 224, 1)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(17, 24, 40, 1)',
      border: '1px solid slategrey',
      borderRadius: '10px',
    },

    backgroundColor: "rgba(17, 24, 40, 1)",
    color: 'rgba(255, 255, 255, 0.5)',
    "& *:hover": {
      color: "white",
      backgroundColor: "rgba(46, 53, 69, 0.5)",
    }
  },

})((props) => <Autocomplete {...props} />);

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '313px',
    boxSizing: "border-box",
    borderRadius: "10px",
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: "flex",
    alignItems: 'center',
    height: "40px",
    "&:hover": {
      border: '1px solid rgba(255, 255, 255, 1)',
    }
  },
  textField: {
    padding: "0 !important",
    "& *": {
      padding: "0 !important",
    },
    "& input": {
      paddingRight: "50px !important",
    }
  },
  filterIconOn: {
    marginLeft: "10px",
    color: "rgba(30, 150, 252, 1)",
  },
  filterIconOff: {
    marginLeft: "10px",
    color: "rgba(235, 235, 235, 0.5)",
  }

}));

export default function MultiFilter({ value, onChange }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const filter = !!search || value.length !== 0;

  const iconClass = filter ? classes.filterIconOn : classes.filterIconOff;


  const renderTags = useCallback(selected => {
    let renderTagsValue = selected
      .map(function (elem) {
        return elem.title;
      })
      .join(", ");

    return (
      <Typography
        style={{ maxWidth: 160, fontSize: "15px", fontFamily: "inter" }}
        noWrap={true}
      >
        {renderTagsValue}
      </Typography>
    );
  }, []);

  const onSearch = useCallback(e => {
    setSearch(e.target.value);
  }, []);

  const autocompleteInput = useCallback((params) => {
    params.InputProps.disableUnderline = true;

    return (
      <>
        <TextField
          {...params}
          value={search}
          onChange={onSearch}
          className={classes.textField}
          variant="filled"
          placeholder=" Filter by type"
        />
      </>
    )
  }, [classes.textField, onSearch, search]);

  return (
    <div className={classes.wrapper}>

      <div className={iconClass}> <FilterIcon viewBox="-3 -3 22 22" /> </div>

      <AutocompleteMy
        multiple

        value={value}
        onChange={onChange}
        disableListWrap={true}
        disableCloseOnSelect={false}
        options={filterOptions}
        renderTags={renderTags}
        getOptionLabel={option => option.title}

        renderInput={autocompleteInput}
        closeIcon={<ClearIcon style={{ color: 'white' }} fontSize='small' />}
      />
    </div>
  );
}

const filterOptions = [
  { title: "Organization A" },
  { title: "Organization B" },
  { title: "Organization C" },
  { title: "Organization D" },
  { title: "Organization E" },
];

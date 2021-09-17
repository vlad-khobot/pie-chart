/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { useCallback } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ClearIcon from '@material-ui/icons/Clear';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {ReactComponent as FilterIcon} from "./filterIcons.svg";
import { multiFilterStyles } from "./multiFilterStyles";


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

const useStyles = makeStyles(theme => (multiFilterStyles));

export default function MultiFilter({ filters, onFilter }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const filterIsUse = !!search || filters.length !== 0;
  const iconClass = filterIsUse ? classes.filterIconOn : classes.filterIconOff;


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
    const {InputProps} = params;

    return (
      <>
        <TextField
          {...params}
          value={search}
          InputProps={{...InputProps, disableUnderline : true}}
          onChange={onSearch}
          className={classes.textField}
          variant="filled"
          placeholder=" Filter by type"
        />
      </>
    )
  }, [classes.textField, onSearch, search]);

  const arrowColor = filterIsUse ? "white" : "#535864"

  return (
    <div className={classes.wrapper}>

      <div className={iconClass}> <FilterIcon /> </div>

      <AutocompleteMy
        multiple

        value={filters} // will be transferred to renderTags like params "selected"
        onChange={onFilter}
        disableListWrap={true}
        disableCloseOnSelect={false}
        options={filterOptions}
        
        getOptionLabel={option => option.title}

        renderTags={renderTags}
        renderInput={autocompleteInput}

        closeIcon={<ClearIcon style={{ color: 'white' }} fontSize='small' />}
        popupIcon={<ExpandLessIcon style={{color: arrowColor}}/>}
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

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 32,
    height: 14,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(18px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#1E96FC',
        opacity: 1,
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 13,
    height: 13,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function CustomizedSwitches() {
  const [state, setState] = React.useState(true);

  const handleChange = (event) => {
    setState(!state);
  };

  return (
    <>
      <FormControlLabel
        control={<IOSSwitch checked={state} onChange={handleChange} name="checked" />}
      />
      {state ? "Active" : "Not Active"}
      </>
  );
}

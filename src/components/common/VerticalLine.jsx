import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  verticalLine: {
    minWidth: "1px",
    alignSelf: "center",
    backgroundColor: "#65646D",
    height: "25px"
  }
}));

export default function VerticalLine({color, height}) {
  const classes = useStyles();

  return (
    <div style={{backgroundColor: color, height: height}} className={classes.verticalLine}>
    </div>
  );
}

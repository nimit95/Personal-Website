import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#1f2833",
    flexGrow: 1,
    height: "100%"
  },
}));

function Journey() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
    </div>
  )
}

export default Journey;
import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#1f2833",
    flexGrow: 1,
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing(10)
  },
}));

function Work(props) {

  const classes = useStyle();
  return (
    <div className={classes.root}>

    </div>
  )
}

export default Work;
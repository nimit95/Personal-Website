import React from "react"
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#0A192F",
    flexGrow: 1,
    height: "100%"
  },
}));

function About() {
  const classes = useStyle();
  return (
    <div className={classes.root}></div>
  )
}

export default About;
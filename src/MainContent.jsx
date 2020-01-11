
import React from "react";
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  // Load app bar information from the theme
  toolbar: theme.mixins.toolbar,
}));

function MainContent(props) {

  const classes = useStyles();
  return (
    <Container className={classes.toolbar}>
      <h1>Heelo</h1>
    </Container>
  )
}

export default MainContent;
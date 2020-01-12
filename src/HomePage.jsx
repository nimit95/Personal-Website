import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Grid } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
  root: {
    flexGrow: 1,
    width: '100%',
    display:'flex',
    justifyContent:'center'
  },
  typography: {
    align: "center"
  }
}));

function HomePage() {
  const classes = useStyle();
  return (
    // <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
      >

        <Grid item xs={6}>
          <Typography variant="h1" component="h2" gutterBottom  className={classes.typography}>
            h1. Heading
          </Typography>
        </Grid>
      </Grid>

    // </div>
  )
}

export default HomePage;
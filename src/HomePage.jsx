import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Grid, Icon} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite"
import data from './config/config.json'

const useStyle = makeStyles(theme=>({
  root: {
    flexGrow: 1,
    width: '100%',
    display:'flex',
    justifyContent:'center'
  },
  typography: {
    align: "center"
  },
  introduction: {
    color: "#64FFDA",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "36px",
    lineHeight: "24px"
  },
  name: {
    color: "#E6F1FF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "48px",
    // lineHeight: "24px"
  },
  description: {
    color: "#E6F1FF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
    // lineHeight: "40px"
  },
  favourite: {
    color: "#E6F1FF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    marginTop: theme.spacing(10),
    fontSize: "30px",
  },
  pageContent: {
    paddingTop: theme.spacing(10)
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
        className={classes.pageContent}
      >

        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom className={classes.introduction}>
            Hello! I am,
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom className={classes.name}>
            {data.name.toUpperCase()}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom className={classes.description}>
            {data.description}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom className={classes.favourite}>
            I <Favorite/>
          </Typography>
        </Grid>
      </Grid>

    // </div>
  )
}

export default HomePage;
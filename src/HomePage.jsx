import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Grid, Icon, Container} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite"
import data from './config/config.json'
import AnimateText from "./AnimateText";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AnimatedRightIcon from "./AnimatedRightIcon";
import { useHistory } from "react-router-dom";


const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#0A192F",
    flexGrow: 1,
    height: "100%"
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
  favouriteText: {
    color: "#E6F1FF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    marginTop: theme.spacing(10),
    fontSize: "46px",
  },
  favourite: {
    color: "#64FFDA",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
  },
  pageContent: {
    paddingTop: theme.spacing(10),
  }
}));

function HomePage(props) {
  const classes = useStyle();
  const history = useHistory();


  console.log("rerendering")
  return (
    // <div className={classes.root}>
    <div className={`${classes.root}`}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        className={classes.pageContent}>

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

        <Grid container xs={12} direction="row" justify="flex-end">
          <Grid item>
            <AnimatedRightIcon onClick={() => {history.replace("/about")}}/>
          </Grid>
        </Grid>


        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom className={classes.favouriteText}>
            I <Favorite style={{width: "36px", height: "36px", color: "#ff0000"}}/>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom className={classes.favourite}>
            <AnimateText text={data.favourite}/>
          </Typography>
        </Grid>
      </Grid>

    </div>
    // </div>
  )
}

export default HomePage;
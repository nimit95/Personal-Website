import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Grid, Icon, Container} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite"
import data from './config/config.json'
import AnimateText from "./Animations/AnimateText";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AnimatedRightIcon from "./Animations/AnimatedRightIcon";
import AnimatedFavoriteIcon from './Animations/AnimatedFavoriteIcon'
import {useHistory} from "react-router-dom";
import AnimatedLeftIcon from "./Animations/AnimatedLeftIcon";
import Button from "@material-ui/core/Button";


const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#1f2833",
    flexGrow: 1,
    height: "100%"
  },
  typography: {
    align: "center"
  },
  introduction: {
    color: "#e6f1ff",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "36px",
    lineHeight: "24px"
  },
  name: {
    color: "#66fcf1",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "48px",
    // lineHeight: "24px"
  },
  description: {
    color: "#e6f1ff",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
    // lineHeight: "40px"
  },
  favouriteText: {
    color: "#e6f1ff",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    marginTop: theme.spacing(10),
    fontSize: "46px",
  },
  favourite: {
    color: "#66fcf1",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
  },
  pageContent: {
    paddingTop: theme.spacing(10),
  },
  getInTouchButton: {
    border: "1px solid #e6f1ff",
    borderRadius: "2px",
    margin: theme.spacing(5),
    padding: theme.spacing(1, 1.5),
    textDecoration: 'none',
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "16px",

    color: "#66fcf1",
  }
}));

function HomePage(props) {
  const classes = useStyle();
  const history = useHistory();


  console.log("rerendering")
  return (
    // <div className={classes.root}>
    <div className={`${classes.root}`}>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{height: "100%"}}>
        <Grid item xs={0.5}>
          <AnimatedLeftIcon disabled/>
        </Grid>
        <Grid
          container
          item
          xs={10}
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


          <Grid item xs={6}>
            <Typography variant="h3" gutterBottom className={classes.favouriteText}>
              I <AnimatedFavoriteIcon/>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" gutterBottom className={classes.favourite}>
              <AnimateText text={data.favourite}/>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.getInTouchButton} onClick={() => history.push("/contact")}>
              Get in Touch!
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <AnimatedRightIcon onClick={() => {
            history.push("/about")
          }}/>
        </Grid>
      </Grid>
    </div>
    // </div>
  )
}

export default HomePage;
import React from "react"
import {Container, makeStyles, Grid, Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import data from "./config/config";
import AnimatedRightIcon from "./Animations/AnimatedRightIcon";
import AnimatedLeftIcon from "./Animations/AnimatedLeftIcon";
import Hidden from "@material-ui/core/Hidden";


const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    height: "100%"
  },
  aboutTxt: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "18px",
    textAlign: "justify"
  },
  centerCropped: {
    objectFit: "none",/* Do not scale the image */
    objectPosition: "center", /* Center the image within the element */
    height: "250px",
    width: "250px",

    display: "block"
  },
  heading: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
  }
}));

function About(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{height:"100%"}}>
        <Hidden mdDown>
        <Grid item xs={0.5}>

          <AnimatedLeftIcon onClick={() => {
            props.history.replace("/?back")
          }}/>
        </Grid>
      </Hidden>

        <Grid container item xs={10} alignItems="center" justify="space-evenly" direction="row">
          <Grid item>
            <div>
              <img className={classes.centerCropped}
                   src={data.aboutPictureURL}
                   alt="recipe thumbnail"/>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              About Me!
            </Typography>
            {data.aboutText.split("\n").map(paraTxt => {
              return <Typography paragraph className={classes.aboutTxt}>
                {paraTxt}
              </Typography>
            })}
          </Grid>
        </Grid>
        <Hidden mdDown>
        <Grid item xs={0.5}> <AnimatedRightIcon onClick={() => {
          props.history.push("/experience")
        }}/></Grid></Hidden>
      </Grid>
    </div>
  )
}

export default About;
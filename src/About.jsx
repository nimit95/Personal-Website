import React from "react"
import {Container, makeStyles, Grid, Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import data from "./config/config";
import AnimatedRightIcon from "./AnimatedRightIcon";
import AnimatedLeftIcon from "./AnimatedLeftIcon";


const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#1f2833",
    flexGrow: 1,
    height: "100%",
    paddingTop: theme.spacing(10)
  },
  aboutTxt: {
    color: "#c5c6c7",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
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
    color: "#66fcf1",
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
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item xs={0.5}>
          <AnimatedLeftIcon onClick={() => {
            props.history.replace("/?back")
          }}/>
        </Grid>

        <Grid container item xs={10} alignItems="center" justify="space-evenly" direction="row">
          <Grid item>
            <div>
              <img className={classes.centerCropped}
                   src={"https://avatars0.githubusercontent.com/u/14093420?s=460&v=4"}
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
        <Grid item xs={0.5}> <AnimatedRightIcon onClick={() => {
          props.history.push("/experience")
        }}/></Grid>
      </Grid>
    </div>
  )
}

export default About;
import React from "react"
import {makeStyles, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import data from "./config/config";
import AnimatedRightIcon from "./Animations/AnimatedRightIcon";
import AnimatedLeftIcon from "./Animations/AnimatedLeftIcon";
import Hidden from "@material-ui/core/Hidden";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    minHeight: "100vh",
    // paddingTop: "96px"
  },
  imageDiv: {
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down('sm')]: {
      paddingTop: "96px",
      marginBottom: theme.spacing(5)
    },
    "& img": {
      transition: "transform .1s", /* Animation */
      "&:hover": {
        transform: "scale(1.1)"
      }
    }

  },
  aboutTxt: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: theme.typography.pxToRem(16),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(16),
      padding: theme.spacing(5)
    },
    textAlign: "justify"
  },
  centerCropped: {
    objectFit: "scale-down",/* Do not scale the image */
    objectPosition: "center", /* Center the image within the element */
    height: theme.typography.pxToRem(250),
    width: theme.typography.pxToRem(250),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(50),
      lineHeight: theme.typography.pxToRem(50),
    },

    display: "block"
  },
  heading: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
    },
  },
  knowMoreLink: {
    fontSize: theme.typography.pxToRem(18),
    border: "1px solid #e6f1ff",
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    textDecoration: 'none',
    padding: "10px"
  }
}));

function About(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{minHeight: "100vh"}}>
        <Hidden smDown>
          <Grid item lg={0.5}>

            <AnimatedLeftIcon onClick={() => {
              props.history.replace("/?back")
            }}/>
          </Grid>
        </Hidden>

        <Grid container item md={9} lg={10} alignItems="center" direction="row">
          <Grid item xs={12} md={5}>
            <div className={classes.imageDiv}>
              <img className={classes.centerCropped}
                   src={data.aboutPictureURL}
                   alt="thumbnail"/>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              About Me!
            </Typography>
            <Typography paragraph className={classes.aboutTxt}>
              {data.aboutText.split("\n").map(paraTxt => {
                return <>{paraTxt}<br/></>
              })}
              Here are a few technologies I've been working with recently:<br/>
              {data.aboutTechnologies.map(tech => {return <><b>{tech}, </b></>})}
            </Typography>


          </Grid>
          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <Grid item xs={12} md={7} style={{display: "flex", justifyContent: "center", padding: "10px"}}>
              <Button component={ Link } color="primary" to="/experience" className={classes.knowMoreLink}>
                Know More!
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden smDown>
          <Grid item lg={0.5}> <AnimatedRightIcon onClick={() => {
            props.history.push("/experience")
          }}/></Grid></Hidden>
      </Grid>
    </div>
  )
}

export default About;
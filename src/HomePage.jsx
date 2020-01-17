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
import Link from "@material-ui/core/Link";
import Hidden from '@material-ui/core/Hidden';


const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    height: "100%"
  },
  typography: {
    align: "center"
  },
  introduction: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(36),
    lineHeight: theme.typography.pxToRem(24),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(16),
    },

    textAlign: "center"
  },
  name: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(48),
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(32),
    },
    // lineHeight: "24px"

  },
  description: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(20),
    },
    textAlign: "center"
    // lineHeight: "40px"
  },
  favouriteText: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    marginTop: theme.spacing(10),
    fontSize: theme.typography.pxToRem(48),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(32),
    },
  },
  favourite: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(20),
    },
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
    textAlign: "center",
    fontSize: theme.typography.pxToRem(15),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(15),
    },
    color: theme.palette.secondary.main,
  },
  knowMoreLink: {
    fontSize: theme.typography.pxToRem(18),
    border: "1px solid #e6f1ff",
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    marginTop: theme.spacing(10),
    padding: theme.spacing(1, 1.5),
    textDecoration: 'none',
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
        <Hidden smDown>
          <Grid item xs={0.5}>
            <AnimatedLeftIcon disabled/>
          </Grid>
        </Hidden>
        <Grid
          container
          item
          md={10}
          sm={12}
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

          <Hidden only="sm">
            <Grid item xs={6} className={classes.knowMoreLink}>
              <Link color="primary" href="/about">
                Know More!
              </Link>
            </Grid>
          </Hidden>


          <Grid item xs={6}>
            <Button variant="outlined" className={classes.getInTouchButton} component="a"
                    href={`mailto:${data.email}?Subject=Hello`} target="_top">
              Get in Touch!
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Hidden smDown>
            <AnimatedRightIcon onClick={() => {
              history.push("/about")
            }}/>
          </Hidden>
        </Grid>
      </Grid>
    </div>
    // </div>
  )
}

export default HomePage;
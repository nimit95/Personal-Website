import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import AnimatedLeftIcon from "./Animations/AnimatedLeftIcon";
import Typography from "@material-ui/core/Typography";
import AnimatedRightIcon from "./Animations/AnimatedRightIcon";
import data from './config/config'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Hidden from "@material-ui/core/Hidden";
import {Link} from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    minHeight: "100vh",
    paddingTop: theme.spacing(10)
  },
  pageName: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down('sm')]: {
      paddingTop: "10px",
    },
  },
  gridList: {
    width: 500,
    height: 450,
  },
  girdListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      padding: "20px 30px"
    },
  },
  card: {
    backgroundColor: theme.palette.secondaryBackground,
    width: "100%",
    "&:hover": {background: theme.palette.hoverBackground, cursor: "pointer"},
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  projectName: {
    fontSize: 17,
    color: theme.palette.primary.main
  },
  projectDescription: {
    color: theme.palette.primary.main,
    textAlign: "justify",
    fontSize: theme.typography.pxToRem(14),
    fontStyle: "thin",
    fontWeight: "300",
  },
  pos: {
    marginBottom: 12,
  },
  blogHeading: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(25),
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
  },

}));


function Work(props) {

  const classes = useStyle();

  function getBlogWork() {
    return (
      <>
        <Typography variant="h3" gutterBottom className={classes.blogHeading} alignItems="center" justify="center">
          Blogs!
        </Typography>
        <Grid container spacing={1} className={classes.girdListContainer}>
          {data.blogData.map(exp => (
            <Grid item md={4} sm={6} xs={12} style={{display: "flex"}}>
              <Card className={classes.card} variant="outlined" onClick={() => {
                window.open(exp.link)
              }}>
                <CardContent>
                  <Typography className={classes.projectName} gutterBottom>
                    {exp.name}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.projectDescription}>
                    {exp.description}
                  </Typography>
                </CardContent>
                <CardActions style={{justifyContent: "flex-end"}}>
                  <Button size="small" target="_blank" href={exp.link}><OpenInNewIcon fontSize="medium"/></Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{height: "100%"}}>
        <Hidden xsDown>
          <Grid item xs={0.5}>
            <AnimatedLeftIcon onClick={() => {
              props.history.replace("/experience?back")
            }}/>
          </Grid>
        </Hidden>
        <Grid container item lg={10} sm={8} xs={12} alignItems="stretch" justify="center" direction="column"
              style={{textAlign: "center"}}>
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName} alignItems="center" justify="center">
              My Work!
            </Typography>
            <Grid container spacing={1} className={classes.girdListContainer}>
              {data.projectData.map(exp => (
                <Grid item md={4} sm={6} xs={12} style={{display: "flex"}}>
                  <Card className={classes.card} variant="outlined" onClick={() => {
                    window.open(exp.link)
                  }}>
                    <CardContent>
                      <Typography className={classes.projectName} gutterBottom>
                        {exp.name}
                      </Typography>
                      <Typography variant="body2" component="p" className={classes.projectDescription}>
                        {exp.description}
                      </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: "flex-end"}}>
                      <Button size="small" target="_blank" href={exp.link}><OpenInNewIcon fontSize="medium"/></Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

            </Grid>
            {data.blogData && data.blogData.length > 0 && getBlogWork()}
          </Grid>
          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <Grid item xs={12} md={7} style={{display: "flex", justifyContent: "center", padding: "10px"}}>
              <Button component={ Link } color="primary" to="/journey" className={classes.knowMoreLink}>
                Know More!
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={0.5}> <AnimatedRightIcon onClick={() => {
            props.history.push("/journey")
          }}/>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default Work;
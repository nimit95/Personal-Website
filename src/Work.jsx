import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import AnimatedLeftIcon from "./Animations/AnimatedLeftIcon";
import Typography from "@material-ui/core/Typography";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AnimatedRightIcon from "./Animations/AnimatedRightIcon";
import data from './config/config'
import ListItem from "@material-ui/core/ListItem";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Feed from "rss-to-json"

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor:  theme.palette.background,
    flexGrow: 1,
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing(10)
  },
  pageName: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
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
  description: {
    color: theme.palette.primary.main,
    textAlign: "justify",
    fontSize: 14,
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
    fontSize: "25px",
  }
}));


function Work(props) {

  const classes = useStyle();
  const bull = <span className={classes.bullet}>•</span>;

  function getBlogWork() {
    return (
      <>
        <Typography variant="h3" gutterBottom className={classes.blogHeading} alignItems="center" justify="center">
          Blogs!
        </Typography>
        <Grid container spacing={1} className={classes.girdListContainer}>
          {data.blogData.map(exp => (
            <Grid item xs={4} style={{display: "flex"}}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Typography className={classes.projectName} gutterBottom>
                    {exp.name}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.description}>
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
        <Grid item xs={0.5}>
          <AnimatedLeftIcon onClick={() => {
            props.history.replace("/experience?back")
          }}/>
        </Grid>
        <Grid container item xs={10} alignItems="stretch" justify="center" direction="column"
              style={{textAlign: "center"}}>
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName} alignItems="center" justify="center">
              My Work!
            </Typography>
            <Grid container spacing={1} className={classes.girdListContainer}>
              {data.projectData.map(exp => (
                <Grid item xs={4} style={{display: "flex"}}>
                  <Card className={classes.card} variant="outlined">
                    <CardContent>
                      <Typography className={classes.projectName} gutterBottom>
                        {exp.name}
                      </Typography>
                      <Typography variant="body2" component="p" className={classes.description}>
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
        </Grid>
        <Grid item xs={0.5}> <AnimatedRightIcon onClick={() => {
          props.history.push("/work")
        }}/></Grid>
      </Grid>
    </div>
  )
}

export default Work;
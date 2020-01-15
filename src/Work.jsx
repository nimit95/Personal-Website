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

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#1f2833",
    flexGrow: 1,
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing(10)
  },
  pageName: {
    color: "#66fcf1",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  girdListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  }
}));

function Work(props) {

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{height: "100%"}}>
        <Grid item xs={0.5}>
          <AnimatedLeftIcon onClick={() => {
            props.history.replace("/experience?back")
          }}/>
        </Grid>
        <Grid container item xs={10} alignItems="center" justify="space-evenly" direction="column">
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName}>
              My Work!
            </Typography>
            <div className={classes.girdListContainer}>
              <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                  <ListSubheader component="div">December</ListSubheader>
                </GridListTile>
                {data.projectData.map(tile => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title}/>
                    <GridListTileBar
                      title={tile.title}
                      subtitle={<span>by: {tile.author}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                          <InfoIcon/>
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
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
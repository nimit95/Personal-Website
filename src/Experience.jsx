import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import AnimatedLeftIcon from "./Animations/AnimatedLeftIcon";
import data from "./config/config";

import AnimatedRightIcon from "./Animations/AnimatedRightIcon";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#1f2833",
    flexGrow: 1,
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing(10)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  pageName: {
    color: "#66fcf1",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
  }
}));

function Experience(props) {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      <Grid container direction="row" justify="space-between" alignItems="center" style={{height:"100%"}}>
        <Grid item xs={0.5}>
          <AnimatedLeftIcon onClick={() => {
            props.history.replace("/about?back")
          }}/>
        </Grid>
        <Grid container item xs={10} alignItems="center" justify="space-between" direction="column">
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName}>
              My Experience!
            </Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>General settings</Typography>
                <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Users</Typography>
                <Typography className={classes.secondaryHeading}>
                  You are currently not an owner
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                  diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Advanced settings</Typography>
                <Typography className={classes.secondaryHeading}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                  vitae egestas augue. Duis vel est augue.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>Personal data</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          </Grid>
        </Grid>
        <Grid item xs={0.5}> <AnimatedRightIcon onClick={() => {
          props.history.push("/work")
        }}/></Grid>
      </Grid>
    </div>
  )
}

export default Experience;
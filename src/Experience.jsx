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
    backgroundColor: theme.palette.background,
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '75%',
    color: theme.palette.primary.main
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.primary.main,
    flexBasis: '25%',
  },
  expansionPanel: {
    backgroundColor: theme.palette.secondaryBackground,
    color: theme.palette.primary.main,
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },

  },
  expansionPanelSummary: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
  },
  expansionDetail: {
    flexDirection: "column"
  },
}));

function Experience(props) {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      <Grid container direction="row" justify="space-between" alignItems="center" style={{height: "100%"}}>
        <Grid item xs={0.5}>
          <AnimatedLeftIcon onClick={() => {
            props.history.replace("/about?back")
          }}/>
        </Grid>
        <Grid container item xs={10} alignItems="center" justify="space-evenly" direction="column">
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName}>
              My Experience!
            </Typography>
          </Grid>
          <Grid item>
            {data.experience.map((exp, i) => (
              <ExpansionPanel expanded={expanded === `panel${i}`} className={classes.expansionPanel}
                              onChange={handleChange(`panel${i}`)}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon style={{color:"#e6f1ff"}}/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className={classes.expansionPanelSummary}
                >
                  <Typography className={classes.heading}>{i+1}. {exp.name}</Typography>
                  <Typography className={classes.secondaryHeading}>{exp.position}</Typography>
                  <Typography className={classes.secondaryHeading}>{exp.time}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionDetail}>
                  {exp.description.split("\n").map(para => (
                    <Typography paragraph>
                      {para}
                    </Typography>
                  ))}

                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}

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
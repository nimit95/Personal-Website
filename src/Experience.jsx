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
import Hidden from "@material-ui/core/Hidden";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

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
    fontSize: "30px",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "10px",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    [theme.breakpoints.down('xs')]: {
      flexBasis: '50%',
    },
    flexBasis: '75%',
    color: theme.palette.headingColor,
    fontFamily: "Roboto",
    fontStyle: "bold",
    fontWeight: "900",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.primary.main,
    fontStyle: "italic",
    flexBasis: '25%',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '50%',
    },
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
    flexDirection: "column",
    color: theme.palette.primary.main,
  },
  experienceDescription: {
    color: theme.palette.primary.main,
    textAlign: "justify",
    fontSize: 14,
    fontStyle: "thin",
    fontWeight: "300",
  },
  expansionContent: {
    [theme.breakpoints.down('xs')]: {
      padding: "15px",
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

function Experience(props) {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      <Grid container direction="row" justify="space-between" alignItems="center" style={{minHeight: "100%"}}>
        <Hidden xsDown>
          <Grid item md={0.5} sm={1}>
            <AnimatedLeftIcon onClick={() => {
              props.history.replace("/about?back")
            }}/>
          </Grid>
        </Hidden>
        <Grid container item lg={10} sm={9} xs={12} alignItems="center" justify="space-evenly" direction="column">
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName}>
              My Experience!
            </Typography>
          </Grid>
          <Grid item className={classes.expansionContent}>
            {data.experience.map((exp, i) => (
              <ExpansionPanel expanded={expanded === `panel${i}`} className={classes.expansionPanel}
                              onChange={handleChange(`panel${i}`)}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon style={{color: "#e6f1ff"}}/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className={classes.expansionPanelSummary}
                >
                  <Typography className={classes.heading}>{i + 1}. {exp.name}</Typography>
                  <Typography className={classes.secondaryHeading}>{exp.position}</Typography>
                  <Hidden xsDown>
                  <Typography className={classes.secondaryHeading}>{exp.time}</Typography>
                  </Hidden>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionDetail}>
                  <Hidden only={['sm','md', 'lg', 'xl']}>
                    <Typography className={classes.secondaryHeading}>{exp.time}</Typography>
                  </Hidden>
                  {exp.description.split("\n").map(para => (
                    <Typography paragraph className={classes.experienceDescription}>
                      {para}
                    </Typography>
                  ))}

                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}

          </Grid>
          <Hidden only={['sm','md', 'lg', 'xl']}>
            <Grid item xs={12} md={7} style={{display:"flex", justifyContent: "center", padding:"10px"}}>
              <Button component={ Link } color="primary" to="/work"  className={classes.knowMoreLink}>
                Know More!
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden xsDown>
          <Grid item md={0.5} sm={1}>
            <AnimatedRightIcon onClick={() => {
              props.history.push("/work")
            }}/>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default Experience;
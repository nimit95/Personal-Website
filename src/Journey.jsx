import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import AnimatedLeftIcon from "./Animations/AnimatedLeftIcon";
import AnimatedRightIcon from "./Animations/AnimatedRightIcon";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import data from './config/config';
import Hidden from "@material-ui/core/Hidden";

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    minHeight: "100vh",
    paddingTop: theme.spacing(5)
  },
  pageName: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
    marginTop: "40px"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    background: theme.palette.hoverBackground,
    color: theme.palette.primary.main,
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  stepper: {
    backgroundColor: theme.palette.secondaryBackground,
    color: theme.palette.primary.main,
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    "&$completed": {
      color: "lightgreen"
    },
    "&$active": {
      color: "pink"
    },
    "& $disabled": {
      color: "red"
    },
    "& $label": {
      color: "red"
    },
  },
  stepperLabel: {
    "& .MuiStepLabel-active": {
      color: theme.palette.primary.main,
    },
    "& .MuiStepLabel-completed": {
      color: theme.palette.primary.main,
    },
    "&.Mui-disabled .MuiStepLabel-label": {
      color: theme.palette.primary.main,
    },
    "&.MuiStepIcon-root": {
      color: theme.palette.primary.main,
    },
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
  },
  journeyDescription: {
    color: theme.palette.primary.main,
    textAlign: "justify",
    fontSize: theme.typography.pxToRem(14),
    fontStyle: "thin",
    fontWeight: "300",
  },
}));

function getSteps() {
  return data.journeySteps.map(journey => journey.heading);
}

function getStepContent(step) {
  if (step < data.journeySteps.length) {
    return data.journeySteps[step].description
  }
  return 'Unknown step';
}


function Journey(props) {
  const classes = useStyle();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{height: "100%"}}>
        <Hidden xsDown>
          <Grid item xs={1}>
            <AnimatedLeftIcon onClick={() => {
              props.history.replace("/work?back")
            }}/>
          </Grid>
        </Hidden>
        <Grid container item lg={10} sm={8} xs={12} alignItems="center" justify="space-evenly" direction="column">
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName}>
              My Journey!
            </Typography>
          </Grid>

          <Grid item xs={11} style={{width: "100%"}}>
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel className={classes.stepperLabel}>{label}</StepLabel>
                  <StepContent>
                    <Typography className={classes.journeyDescription}>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>Journey completed - Present - you&apos;re finished</Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={1}> <AnimatedRightIcon disabled/></Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default Journey;
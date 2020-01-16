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

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: "#1f2833",
    flexGrow: 1,
    height: "100%"
  },
  pageName: {
    color: "#66fcf1",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
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
  },
  stepper: {
    backgroundColor: theme.palette.secondaryBackground,
    color: theme.palette.primary.main,
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    "& $completed": {
      color: "lightgreen"
    },
    "& $active": {
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
    "&:span":{
      color:theme.palette.primary.main,
    },
    "& $completed": {
      color: "lightgreen"
    },
    "& $active": {
      color: "pink"
    },
    "& $disabled": {
      color: "red"
    },
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
  },
  journeyDescription: {
    color: theme.palette.primary.main,
    textAlign: "justify",
    fontSize: 14,
    fontStyle: "thin",
    fontWeight: "300",
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
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
        <Grid item xs={1}>
          <AnimatedLeftIcon onClick={() => {
            props.history.replace("/work?back")
          }}/>
        </Grid>
        <Grid container item xs={10} alignItems="center" justify="space-evenly" direction="column">
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName}>
              My Journey!
            </Typography>
          </Grid>

          <Grid item xs={11} style={{width:"100%"}}>
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
              {steps.map((label, index) => (
                <Step key={label} >
                  <StepLabel color={"#66fcf1"} className={classes.stepperLabel}>{label}</StepLabel>
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
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
          </Grid>
        </Grid>
        <Grid item xs={1}> <AnimatedRightIcon onClick={() => {
          props.history.push("/contact")
        }}/></Grid>
      </Grid>
    </div>
  )
}

export default Journey;
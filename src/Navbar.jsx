import React from 'react'
import {AppBar, Toolbar, Typography, Paper} from "@material-ui/core/";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {NavLink} from "react-router-dom";
import {Hidden} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '0'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.appBarBackground,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarDiv: {
    flexGrow: 1,
    marginRight: theme.spacing(3),
    zIndex: 1400
  },
  toolbarTitle: {
    // flexGrow: 1,
    '& *': {
      margin: theme.spacing(1, 1.5),
      textDecoration: 'none',
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "16px",
      alignItems: "center",
      textAlign: "center",
      color: "#64FFDA",
    }
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  navButton: {
    border: "1px solid #80CBC4",
    borderRadius: "2px"
  },
  typography: {
    // textAlign: 'left',
    // padding: theme.spacing.unit * 2
  },
  activeStyle: {

  }
}));

function Navbar(props) {
  const classes = useStyles();
  const activeStyle = {
    fontWeight: "bold",
  };

  return (

    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar >
        {/*<Typography variant="h5">OKR Todo</Typography>*/}
        <div className={classes.toolbarDiv}>
          <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid item >
              <Hidden xsDown>
              <nav className={classes.toolbarTitle}>
                <NavLink exact to="/about" activeStyle={activeStyle}>
                  01. About
                </NavLink>
                <NavLink to="/experience" activeStyle={activeStyle}>
                  02. Experience
                </NavLink>
                <NavLink to="/work"activeStyle={activeStyle}>
                  03. Work
                </NavLink>
                <NavLink to="/journey" activeStyle={activeStyle}>
                  04. Journey
                </NavLink>
                {/*<NavLink to="/contact" activeStyle={activeStyle}>*/}
                {/*  05. Contact*/}
                {/*</NavLink>*/}
                <Button variant="outlined" className={classes.navButton}>
                  Resume
                </Button>
              </nav>
              </Hidden>
            </Grid>
          </Grid>
          {/* <Button href="#" variant="outlined">
            Login
        </Button> */}
        </div>
      </Toolbar>
    </AppBar>


  )
}

export default Navbar;
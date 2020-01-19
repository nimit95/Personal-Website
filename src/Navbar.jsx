import React from 'react'
import {AppBar, Toolbar} from "@material-ui/core/";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import {Hidden} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import data from './config/config'
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';


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
      color: theme.palette.secondary.main
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      color: theme.palette.primary.main,
      '& *': {
        padding: theme.spacing(0),
        color: theme.palette.primary.main,
        fontSize: "24px",
      }
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  navButton: {
    border: "1px solid #80CBC4",
    borderRadius: "2px"
  },
  hamIcon: {

    color: theme.palette.primary.main
  },
  typography: {
    // textAlign: 'left',
    // padding: theme.spacing.unit * 2
  },
  activeStyle: {},
  menu: {
    // color: theme.palette.secondary.main,

    // background: theme.palette.appBarBackground,

    "& *": {
      color: theme.palette.secondary.main,
      fontStyle: "bold",
      fontWeight: "bold"
      // opacity: 0.25,
    }
  },
  menuItem: {
    backgroundColor: theme.palette.appBarBackground,
    color: theme.palette.secondary.main,
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const activeStyle = {
    fontWeight: "bold",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {/*<Typography variant="h5">OKR Todo</Typography>*/}
        <div className={classes.toolbarDiv}>
          <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid item>

              <nav className={classes.toolbarTitle}>
                <Hidden xsDown>
                  <NavLink exact to="/about" activeStyle={activeStyle}>
                    01. About
                  </NavLink>
                  <NavLink to="/experience" activeStyle={activeStyle}>
                    02. Experience
                  </NavLink>
                  <NavLink to="/work" activeStyle={activeStyle}>
                    03. Work
                  </NavLink>
                  <NavLink to="/journey" activeStyle={activeStyle}>
                    04. Journey
                  </NavLink>
                  {/*<NavLink to="/contact" activeStyle={activeStyle}>*/}
                  {/*  05. Contact*/}
                  {/*</NavLink>*/}
                  <Button variant="outlined" className={classes.navButton} href={data.resumeUrl} target="_blank">
                    Resume
                  </Button>
                </Hidden>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                          className={classes.hamIcon}>
                    <MenuIcon/>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={classes.menu}
                  >
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/">Home</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/about">About</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/experience">Experience</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/work">Work</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/journey">Journey</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component="a" href={data.resumeUrl}>Resume</MenuItem>
                  </Menu>
                </Hidden>
              </nav>

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
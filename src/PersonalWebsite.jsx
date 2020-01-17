import React from "react";
import Navbar from "./Navbar";
import Grid from '@material-ui/core/Grid'
import SideDrawer from "./SideDrawer"
import MainContent from "./MainContent";
import Router from './Router'
import {makeStyles, CssBaseline} from "@material-ui/core";
import theme from './Theme'
import {ThemeProvider} from '@material-ui/core/styles';
import Hidden from "@material-ui/core/Hidden";


/**
 * TODO: resume, experience content fix, image fix, write readme,like button, journey, Add 404 page, , tech display in about, , grammarly on config json, cleanup
 *
 * TODO long term - contact page with form, github button in card
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyle = makeStyles(theme => ({
  root: {
    padding: "0",
    margin: "0",
    display: "flex",
    height: "100%"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.behindBackground,
    height: "100%"
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },

}));

function PersonalWebsite() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline/>

      <Navbar/>

      <Hidden smDown>
      <SideDrawer/>
      </Hidden>

      <div className={classes.content}>
        {/*<div className={classes.toolbar}/>*/}
        <Router className={classes.root}/>
      </div>
    </div>


  )
    ;
}


export default PersonalWebsite;
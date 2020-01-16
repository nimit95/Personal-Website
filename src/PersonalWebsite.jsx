import React from "react";
import Navbar from "./Navbar";
import Paper from '@material-ui/core/Paper'
import SideDrawer from "./SideDrawer"
import MainContent from "./MainContent";
import Router from './Router'
import {makeStyles, CssBaseline} from "@material-ui/core";
import theme from './Theme'
import {ThemeProvider} from '@material-ui/core/styles';

/**
 * TODO: like button, journey, personal corner, certification, resume, contact, central theme colours, bottom github made. Add 404 page, image fix, ,exprience color fix, github button in card
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
  }
}));

function PersonalWebsite() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline/>

      <Navbar/>

      <SideDrawer/>

      <div className={classes.content}>
        {/*<div className={classes.toolbar}/>*/}
        <Router className={classes.root}/>
      </div>
    </div>
  );
}


export default PersonalWebsite;
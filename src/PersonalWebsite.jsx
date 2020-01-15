import React from "react";
import Navbar from "./Navbar";
import Paper from '@material-ui/core/Paper'
import SideDrawer from "./SideDrawer"
import MainContent from "./MainContent";
import Router from './Router'
import {makeStyles, CssBaseline} from "@material-ui/core";

/**
 * TODO: like button, journey, personal corner, certification, resume, contact, central theme colours
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
    backgroundColor: "#c5c6c7",
    height:"100%"
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
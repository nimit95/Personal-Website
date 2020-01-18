import React from "react";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer"
import Router from './Router'
import {makeStyles, CssBaseline, List} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Footer from "./Footer";


/**
 * TODO: resume, experience content fix,  write readme,like button, Add 404 page, , tech display in about, , grammarly on config json, cleanup, gs, know moew button, footer
 *
 * TODO long term - contact page with form, github button in card
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyle = makeStyles(theme => ({
  root: {
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.behindBackground,

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

      <Hidden xsDown>
        <SideDrawer/>
      </Hidden>

      <div className={classes.content}>
        {/*<div className={classes.toolbar}/>*/}
        <Router className={classes.root}/>
      </div>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Footer/>
      </Hidden>
    </div>


  )
    ;
}


export default PersonalWebsite;
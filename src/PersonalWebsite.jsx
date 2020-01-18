import React from "react";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer"
import Router from './Router'
import {makeStyles, CssBaseline, List} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Footer from "./Footer";


/**
 * TODO:  write readme
 *
 * TODO long term - contact page with form, github button in card, Add 404 page, like button, errors fix,
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyle = makeStyles(theme => ({
  root: {
    padding: "0",
    margin: "0",
    display: "flex",
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
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
  );
}


export default PersonalWebsite;
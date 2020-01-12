import React from "react";
import Navbar from "./Navbar";
import Paper from '@material-ui/core/Paper'
import SideDrawer from "./SideDrawer"
import MainContent from "./MainContent";
import Router from './Router'

function PersonalWebsite() {
  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#0A192F"}}
           elevation={0}
      >

      <Navbar />
      <SideDrawer />
      <Router />
    </Paper>
  );
}


export default PersonalWebsite;
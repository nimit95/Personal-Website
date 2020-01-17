import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {List, makeStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import data from './config/config.json'
import EmailIcon from '@material-ui/icons/Email';
import SvgIcon from "@material-ui/core/SvgIcon";


const useStyles = makeStyles(theme => ({
  drawer: {

    width: theme.spacing(12) + 1,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    background: theme.palette.background,
    overflowX: 'hidden',
    borderRight: "1px solid #FFFFFF",
    boxShadow: "0px 5.5px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

  },
  gravatar: {
    width: '65px',
    height: '65px'
  },
  drawerList: {
    '& *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  footer: {
    display: "flex",
    "-webkit-box-pack": "center",
    justifyContent: "center",
    "-webkit-box-align": "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.behindBackground,
    textAlign: "center",
    height: "auto",
    "& > a": {
      cursor: "pointer",
      textDecoration: "none",
      transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
      color: theme.palette.primary.main,
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "300",
      minHeight: '12vh',
      '& :selection': {
        color:  theme.palette.secondary.main
      },
    },
    '&:selection a': {
      color:  theme.palette.secondary.main
    },
    padding: theme.spacing(2)
  }
}));

function SideDrawer(props) {

  console.log(data);
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawer
      }}
    >
      {/*<div className={classes.toolbar}>*/}
      {/*  <IconButton onClick={handleDrawerClose}>*/}
      {/*    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}*/}
      {/*  </IconButton>*/}
      {/*</div>*/}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{minHeight: '90vh'}}>

        <Button href={"/"}><Avatar src="https://s.gravatar.com/avatar/33bee907d6bc6fb421926c792051648a?s=80"
                                   className={classes.gravatar}/></Button>
        <Divider/>

        <List className={classes.drawerList}>
          {data["drawerButtons"].map((drawerBtn, index) => (
            <ListItem button key={drawerBtn.iconName} component="a" target="_blank" href={drawerBtn.link}>
              {/*<svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path d="M22.7189 20.9902H18.77V15.2747C18.77 13.9117 18.74 12.1577 16.7122 12.1577C14.6533 12.1577 14.3389 13.6408 14.3389 15.1741V20.9902H10.39V9.23684H14.1833V10.8389H14.2344C14.7644 9.91524 16.0533 8.94024 17.9789 8.94024C21.98 8.94024 22.72 11.3726 22.72 14.5388V20.9902H22.7189ZM5.93 7.62861C4.65889 7.62861 3.63778 6.67824 3.63778 5.50926C3.63778 4.34132 4.66 3.39197 5.93 3.39197C7.19667 3.39197 8.22333 4.34132 8.22333 5.50926C8.22333 6.67824 7.19556 7.62861 5.93 7.62861ZM7.91 20.9902H3.95V9.23684H7.91V20.9902ZM24.6944 0H1.96778C0.88 0 0 0.794368 0 1.7745V22.8571C0 23.8382 0.88 24.6316 1.96778 24.6316H24.6911C25.7778 24.6316 26.6667 23.8382 26.6667 22.8571V1.7745C26.6667 0.794368 25.7778 0 24.6911 0H24.6944Z" fill="#E6F1FF"/>*/}
              {/*</svg>*/}
              {drawerBtn.iconName === 'instagram' ?
                <InstagramIcon style={{color: "#ffffff"}} fontSize="large"/> :
                <SvgIcon>
                  <path d={drawerBtn.svgPath} fill="#ffffff"/>
                </SvgIcon>}

            </ListItem>
          ))}
          <ListItem button key={"emial"} component="a" href={`mailto:${data.email}?Subject=Hello`} target="_top">
            <EmailIcon style={{color: "#ffffff"}} fontSize="large"/>
          </ListItem>
        </List>


      </Grid>
      <footer className={classes.footer}><a href="https://github.com/nimit95/Personal-Website" target="_blank"
                                            rel="nofollow noopener noreferrer">
        <div>Designed &<br/> Built with ❤️ <br/>by <br/>Nimit</div>
      </a></footer>
    </Drawer>
  );
}

export default SideDrawer;
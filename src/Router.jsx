import React from "react"
import {Switch, Route, Redirect, useLocation} from "react-router-dom";
import { useTransition, animated, config, useSpring } from 'react-spring'
import HomePage from "./HomePage";
import About from './About'
import Experience from './Experience'
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
  }
}));

function Router() {
  const location = useLocation();
  const classes = useStyle();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={{...props}} className={classes.root}>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />}/>
        <Route exact path="/about" render={(props) => <About {...props}/>}/>
        <Route exact path="/experience" render={(props) => <Experience {...props}/>}/>
      </Switch>
    </animated.div>
  ));
}

export default Router;
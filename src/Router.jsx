import React from "react"
import {Switch, Route, useLocation} from "react-router-dom";
import {useTransition, animated} from 'react-spring'
import HomePage from "./HomePage";
import About from './About'
import Experience from './Experience'
import Work from './Work'
import {makeStyles} from "@material-ui/core";
import Journey from "./Journey";

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
    from: {opacity: 0.9, transform: 'translate3d(50%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(50%,0,0)'},
    config: {duration: 800},
  });
  const transitions2 = useTransition(location, location => location.pathname, {
    from: {opacity: 0.9, transform: 'translate3d(-50%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(50%,0,0)'},
    config: {duration: 800},
  });

  return !location.search ? transitions.map(({item: location, props, key}) => (
    <animated.div key={key} style={{...props}} className={classes.root}>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />}/>
        <Route exact path="/about" render={(props) => <About {...props}/>}/>
        <Route exact path="/experience" render={(props) => <Experience {...props}/>}/>
        <Route exact path="/work" render={(props) => <Work {...props}/>}/>
        <Route exact path="/journey" render={(props) => <Journey {...props}/>}/>
        {/*<Route exact path="/contact" render={(props) => <Contact {...props}/>}/>*/}
      </Switch>
    </animated.div>
  )) : transitions2.map(({item: location, props, key}) => (
    <animated.div key={key} style={{...props}} className={classes.root}>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />}/>
        <Route exact path="/about" render={(props) => <About {...props}/>}/>
        <Route exact path="/experience" render={(props) => <Experience {...props}/>}/>
        <Route exact path="/work" render={(props) => <Work {...props}/>}/>
        <Route exact path="/journey" render={(props) => <Journey {...props}/>}/>
        {/*<Route exact path="/contact" render={(props) => <Contact {...props}/>}/>*/}
        {/*<Route path="/" render={(props) => <Contact {...props}/>}/>*/}
      </Switch>
    </animated.div>
  ))
}

export default Router;
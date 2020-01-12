import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./HomePage";
import About from './About'

function Router() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <HomePage {...props} />}/>
      <Route exact path="/about" render={(props) => <About {...props}/>}/>
    </Switch>
  )
}

export default Router;
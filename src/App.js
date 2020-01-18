import React from 'react';
import PersonalWebsite from "./PersonalWebsite";
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./Theme";
import data from './config/config'
import ReactGA from 'react-ga';


function App() {
  if(data.ga) {
    ReactGA.initialize(data.ga);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <PersonalWebsite/>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;

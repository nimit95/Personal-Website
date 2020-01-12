import React from 'react';
import PersonalWebsite from "./PersonalWebsite";
import {BrowserRouter} from 'react-router-dom'
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <PersonalWebsite/>
      </BrowserRouter>
  );
}

export default App;

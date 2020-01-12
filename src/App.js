import React from 'react';
import PersonalWebsite from "./PersonalWebsite";
import './App.css';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <PersonalWebsite/>
      </BrowserRouter>
    </div>
  );
}

export default App;

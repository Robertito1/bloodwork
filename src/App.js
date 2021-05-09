import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/home";
import Request from "./pages/request"
import Donate from "./pages/donate"
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

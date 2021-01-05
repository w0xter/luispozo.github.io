import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import 'antd/dist/antd.css';

import Lab from './pages/Lab';
import Experiment from './pages/Experiment';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/lab" component={Lab} />
        <Route path="/experiment/:experimentid" component={Experiment}/> 
      </Switch>
    </Router>
  );
}

export default App;

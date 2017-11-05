import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;

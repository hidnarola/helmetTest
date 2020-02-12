import React from 'react';
import './App.css';
import { Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import history from './history';
import About from './component/About';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

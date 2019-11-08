import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import './App.css';
import Dashboard from './components/dashboard';
class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </Router>
    );
  }
}
export default App;
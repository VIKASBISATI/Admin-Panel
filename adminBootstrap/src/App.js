import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
import './App.css';
class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </Router>
    );
  }
}
export default App;
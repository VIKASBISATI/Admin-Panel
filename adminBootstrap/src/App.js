import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/signIn/signIn'
import './App.css';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/login" component={SignIn} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
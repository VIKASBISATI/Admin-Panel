import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/signUp'
import './App.css';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/login" component={SignUp} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
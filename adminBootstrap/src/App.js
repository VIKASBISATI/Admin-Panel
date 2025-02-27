import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import './App.css';
import Dashboard from './components/dashboard';
// import "bootstrap/less/bootstrap.less";
import QuestionAnswers from './components/questionAnswers'
import PaymentComponent from './components/paymentComponent'
class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/QAList" component={QuestionAnswers}></Route>
            <Route path="/payments" component={PaymentComponent}></Route>
          </Switch>
        </Router>
    );
  }
}
export default App;
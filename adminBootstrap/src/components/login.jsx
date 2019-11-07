import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../reducers/loginReducers";
import userActions from "../actions/userActions";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = () => {
    let data={
      "email":this.state.email,
      "password":this.state.password
    }
    this.props.login(data);
  };
  render() {
    return (
      <div className="login-container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="card" style={{ width: "450px", height: "550px" }}>
            <div className="d-flex align-items-center justify-content-center">
              <form>
                <div className="card-title">
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="login-header">
                      <span style={{ color: "blue" }}>F</span>
                      <span style={{ color: "red" }}>U</span>
                      <span style={{ color: "#F4B400" }}>N</span>
                      <span style={{ color: "blue" }}>D</span>
                      <span style={{ color: "green" }}>O</span>
                      <span style={{ color: "red" }}>O</span>
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    className="form-control"
                    onChange={this.handleChangeEmail}
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter password..."
                    id="password"
                    className="form-control"
                    onChange={this.handleChangePassword}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary sunny-morning-gradient"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const actionCreators = {
  login: userActions.login
};
export default connect(
  mapStateToProps,
  actionCreators
)(Login);
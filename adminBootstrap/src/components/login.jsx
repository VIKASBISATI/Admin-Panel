import React, { Component } from "react";
import { connect } from "react-redux";
import userActions from "../actions/userActions";
import { MDBIcon, MDBBtn, MDBCardHeader, MDBInput } from "mdbreact";
import { Card } from "@material-ui/core";
import { getAdminUsersList } from "../services/adminServices";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { GET_ADMIN_DATA } from "../constants/actionTypes";
const dispatchToProps = dispatch => ({
  getUsersList: resData => dispatch({ type: GET_ADMIN_DATA, payload: resData })
});
function mapStateToProps(state) {
  return {
    userList: state.dashboardReducers.user
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      snackbarOpen: false,
      msgSnackbar: ""
    };
  }
  componentDidMount() {
    getAdminUsersList().then(data => {
      console.log("data in login ", data.data.data.data);
      let resData = data.data.data.data;
      this.props.getUsersList(resData);
    });
  }
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
    // console.log("email", this.state.email, e.target.value);
  };
  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
    // console.log("password", this.state.password);
  };

  handleSubmit = () => {
    if (this.state.email === "") {
      this.setState({
        snackbarOpen: !this.state.snackbarOpen,
        msgSnackbar: "Email can't be empty"
      });
    } else if (this.state.password === "") {
      this.setState({
        snackbarOpen: !this.state.snackbarOpen,
        msgSnackbar: "password can't be empty"
      });
    } else {
      let data = {
        email: this.state.email,
        password: this.state.password
      };
      console.log("data before sending to action ", data);
      // this.props.history.push('/dashboard')

      // this.props.loginn(data);

      this.props.history.push("/dashboard");
    }
  };
  handleClose=()=>{
    this.setState({
      snackbarOpen:!this.state.snackbarOpen,

    })
  }
  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh", weight: "100vw" }}
      >
        <Card className="login-card">
          <MDBCardHeader className="form-header deep-blue-gradient rounded">
            <h3 className="my-3">
              <MDBIcon icon="lock" /> AdminLogin
            </h3>
          </MDBCardHeader>
          <div className="login-content">
            <MDBInput
              label="Enter your email"
              icon="envelope"
              group
              type="email"
              validate
              onChange={this.handleChangeEmail}
            />
            <MDBInput
              label="Enter your password"
              icon="lock"
              group
              type="password"
              validate
              onChange={this.handleChangePassword}
            />
            <div className="text-center mt-4">
              <MDBBtn
                color="light-blue"
                className="mb-3"
                type="submit"
                onClick={this.handleSubmit}
              >
                Login
              </MDBBtn>
            </div>
          </div>
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span id="message-id">{this.state.msgSnackbar}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}
const actionCreators = {
  loginn: userActions.login
};
function mapState(state) {
  return { state };
}

export default connect(mapStateToProps, dispatchToProps)(Login);

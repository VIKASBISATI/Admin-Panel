import React, { Component } from "react";
import { Navbar, Nav, Card, Table } from "react-bootstrap";
import { userService } from "../services/adminServices";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { getUsersCartList } from "../services/adminServices";
import { GET_USER_CART_LIST_SUCCESS } from "../constants/actionTypes";
import { Link } from "react-router-dom";
const dispatchToProps = dispatch => ({
  getPendingPayments: resData => {
    console.log("dispatch to props");
    dispatch({ type: GET_USER_CART_LIST_SUCCESS, payload: resData });
  }
});
function mapStateToProps(state) {
  // const getPaymentData=state.paymentReducers.cartData
  const userList = state.dashboardReducers.user;
  return { userList };
}
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: [],
      advance: "",
      basic: "",
      allUsers: [],
      activePage: 1,
      itemsPerPage: 5,
      currentArray: [],
      last: 0,
      activeNav: true,
      sno: 0
    };
  }

  componentDidMount() {
    this.getAdminUser(this.props.userList);
    this.pageSet();
  }

  getAdminUser = async usersData => {
    await this.setState({
      allUsers: usersData
    });
    const totalUsers = this.props.userList.length;
    const type = this.props.userList.filter(data => {
      return data.service === "advance";
    });
    this.setState({
      advance: type.length
    });
    const n = totalUsers - this.state.advance;
    this.setState({
      basic: n
    });
    this.getService(this.state.basic, this.state.advance);
    this.pageSet(this.state.allUsers);
  };

  pageSet = async completeData => {
    const lastIndex = this.state.activePage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentItems = this.state.allUsers.slice(firstIndex, lastIndex);
    await this.setState({
      currentArray: currentItems,
      last: lastIndex,
      sno: 1
    });
  };
  getService = (basic, advance) => {
    userService()
      .then(res => {
        let data1 = {
          type: res.data.data.data[0].name,
          users: advance
        };
        let data2 = {
          type: res.data.data.data[1].name,
          users: basic
        };
        const tempUserType = [];
        tempUserType.push(data1);
        tempUserType.push(data2);
        this.setState({
          userType: tempUserType,
          sno: 1
        });
      })
      .catch(err => {
        console.log("Err in user service", err);
      });
  };

  handlePageChange = async pageNumber => {
    await this.setState({
      activePage: pageNumber
    });
    // console.log("Page number is", this.state.activePage);
    const lastIndex = this.state.activePage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentItems = this.state.allUsers.slice(firstIndex, lastIndex);
    this.setState({
      currentArray: currentItems,
      sno: firstIndex + 1
    });
  };

  handleLogout = () => {
    this.props.history.push("/");
  };

  handleQA = () => {
    this.props.history.push("/QAList");
  };

  handlePayment = () => {
    getUsersCartList().then(resData => {
      this.props.getPendingPayments(resData);
      this.props.history.push("/payments");
    });
  };

  render() {
    // console.log("thjois.props", this.props);
    const userMap = this.state.userType.map((data, index) => {
      return (
        <Card
          style={{ width: "200px", margin: "2em", border: "1px solid blue" }}
          key={index}
        >
          <Card.Body>
            <Card.Title>{data.type}</Card.Title>
            <hr />
            <Card.Text>{data.users}</Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return (
      <div className="dashboard-container">
        {!this.props.navProps ? (
          <div>
            <Navbar bg="light">
              <Navbar.Brand style={{ cursor: "pointer" }}>
                <Link to="/dashboard">ADMIN DASHBOARD</Link>
              </Navbar.Brand>
              <Nav>
                <Nav.Link>
                  <Link to="/QAList">Q & A</Link>
                </Nav.Link>
                <Nav.Link onClick={this.handlePayment}>
                  {" "}
                  <Link to="/dashboard">PAYMENT</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">LOGOUT</Link>
                </Nav.Link>
              </Nav>
            </Navbar>
            <div className="d-flex align-items-center justify-content-center">
              {userMap}
            </div>
            <Table variant="dark" responsive>
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Service</th>
                </tr>
              </thead>
              <tbody>
                {this.state.currentArray.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{this.state.sno++}</td>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>{data.email}</td>
                      <td>{data.service}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsPerPage}
                totalItemsCount={this.state.allUsers.length}
                pageRangeDisplayed={10}
                onChange={this.handlePageChange}
              />
            </div>
          </div>
        ) : (
          <div>
            <Navbar bg="light">
              <Navbar.Brand style={{ cursor: "pointer" }}>
                <Link to="/dashboard">ADMIN DASHBOARD</Link>
              </Navbar.Brand>
              <Nav>
                <Nav.Link>
                  <Link to="/QAList">Q & A</Link>
                </Nav.Link>
                <Nav.Link onClick={this.handlePayment}>PAYMENT</Nav.Link>
                <Nav.Link>
                  <Link to="/">LOGOUT</Link>
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps, dispatchToProps)(Dashboard);

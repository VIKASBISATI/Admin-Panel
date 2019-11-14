import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { Table } from "react-bootstrap";
import Dashboard from "./dashboard";
import { Button } from "@material-ui/core";
import userActions from "../actions/userActions";
function mapStateToProps(state) {
  const getPaymentData = state.paymentReducers.cartData;
  const getCompleteOrderStatus=state.orderCompleteReducers;
  return { getPaymentData };
}
class PaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentData: [],
      activePage: 1,
      itemsPerPage: 5,
      currentArray: [],
      last: 0,
      sno: 0,
      len: 0
    };
  }
  componentWillMount() {
    console.log("did mount props", this.props.getPaymentData);
    // console.log("keys in payment", Object.keys(this.props.getPaymentData[0]));

    if (this.props.getPaymentData !== undefined) {
      const filteredData = this.props.getPaymentData.filter(data => {
        return data.user !== undefined;
      });
      console.log("data with length ", filteredData, filteredData.length);
      this.setState({
        paymentData: filteredData,
        len: this.props.getPaymentData.length
      });
      console.log("data is ", this.state.paymentData);
    } else {
      this.setState({
        len: 0
      });
    }
    console.log(
      "data in set state did mount length of payment data",
      this.state.paymentData
    );
    this.pageSet(this.state.paymentData);
  }
  pageSet = data => {
    console.log("page set called", this.props.getPaymentData);

    const lastIndex = this.state.activePage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    let currentItems = [];
    if (this.props.getPaymentData !== undefined) {
      currentItems = this.props.getPaymentData.slice(firstIndex, lastIndex);
    } else {
      currentItems = this.state.paymentData.slice(firstIndex, lastIndex);
    }
    console.log("current items", this.state.currentItems);
    this.setState({
      currentArray: currentItems,
      last: lastIndex,
      sno: 1
    });
    console.log("current array in page set", this.state.currentArray);
  };
  handlePageChange = pageNumber => {
    this.setState({
      activePage: pageNumber
    });
    console.log("activepage", pageNumber);
    const lastIndex = pageNumber * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentItems = this.state.paymentData.slice(firstIndex, lastIndex);
    this.setState({
      currentArray: currentItems,
      sno: firstIndex + 1
    });
    console.log("sno ater back", this.state.currentArray);
  };

  handleApprove = id => {
    let data = {
      cartId: id
    };
    console.log("id is ",this.props);
    
    this.props.completeOrderDetails(data);
  };

  handleCancelOrder=id=>{
    let data={
      cartId:id
    }
    console.log("id in cancel order",data);
    
    this.props.cancelOrderDetails(data);
  }

  render() {
    console.log("payment render", this.props.getPaymentData);
    return (
      <div>
        <Dashboard navProps={true} />
        <Table variant="dark" responsive>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Service</th>
              <th>Approval</th>
              <th>Rejection</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentArray.map((data, index) => {
              return data.status === "pending" ? (
                <tr key={index}>
                  <td>{data.user.firstName}</td>
                  <td>{data.user.lastName}</td>
                  <td>{data.user.service}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.handleApprove(data.id)}
                    >
                      Approve
                    </Button>
                  </td>
                  <td>
                    <Button variant="contained" color="primary" onClick={()=>this.handleCancelOrder(data.id)}>
                      Reject
                    </Button>
                  </td>
                </tr>
              ) : null;
            })}
          </tbody>
        </Table>
        <div>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsPerPage}
            totalItemsCount={this.state.len}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
const actionCreators = {
  completeOrderDetails: userActions.completeOrder,
  cancelOrderDetails:userActions.cancelOrder
};
export default connect(mapStateToProps,actionCreators)(PaymentComponent);

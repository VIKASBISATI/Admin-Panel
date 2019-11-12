import React, { Component } from "react";
import userActions from "../actions/userActions";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { Button } from "@material-ui/core";
class QuestionAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completeQuestionData: [],
      activePage: 1,
      itemsPerPage: 5,
      currentArray: [],
      last: 0,
      sno: 0
    };
  }
  componentWillMount() {
    this.props.getUnApprovedList(true);
    this.pageSet();
    console.log(";;;;;;;;;", this.props.getCompleteQA);
  }
  componentWillReceiveProps() {
    this.setState({
      completeQuestionData: this.props.getCompleteQA
    });
    console.log("will receiver props", this.state.completeQuestionData);
  }
  pageSet = () => {
    // console.log("complete data is ", completeData);
    // console.log("active page", this.state.activePage);
    const lastIndex = this.state.activePage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentItems = this.state.completeQuestionData.slice(
      firstIndex,
      lastIndex
    );
    // console.log("last index", lastIndex);
    // console.log("first index", firstIndex);
    // console.log("current items", currentItems);
    this.setState({
      currentArray: currentItems,
      last: lastIndex,
      sno: 1
    });

    // console.log("curretn array is ", this.state.currentArray);
  };
  handlePageChange = async pageNumber => {
    await this.setState({
      activePage: pageNumber
    });
    // console.log("Page number is", this.state.activePage);
    const lastIndex = this.state.activePage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentItems = this.state.completeQuestionData.slice(
      firstIndex,
      lastIndex
    );
    // console.log("last index", lastIndex);
    // console.log("first index", firstIndex);
    // console.log("current index", currentItems);
    await this.setState({
      currentArray: currentItems,
      sno: firstIndex + 1
    });
  };

  render() {
    if (this.state.completeQuestionData.length > 0) {
      console.log("data in render", this.state.completeQuestionData);
    }
    return (
      <div>
        
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Question List</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.completeQuestionData.length > 0
              ? this.state.currentArray.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.message}</td>
                      <td>
                        <div className="d-flex justify-content-between">
                          <Button variant="contained" color="primary">
                            Approve
                          </Button>
                          <Button variant="contained" color="primary">
                            Reject
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
        <div>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsPerPage}
            totalItemsCount={this.state.completeQuestionData.length}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
const actionCreators = {
  getUnApprovedList: userActions.getUnApprovedData
};
function mapState(state) {
  console.log("state", state);
  const getCompleteQA = state.questionAnswersReducers.qa;
  console.log("completed qa", getCompleteQA);
  return { getCompleteQA };
}

export default connect(
  mapState,
  actionCreators
)(QuestionAnswers);
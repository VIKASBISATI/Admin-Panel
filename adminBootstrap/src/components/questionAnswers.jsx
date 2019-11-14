import React, { Component } from "react";
import userActions from "../actions/userActions";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { Button } from "@material-ui/core";
import Dashboard from "./dashboard";
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
    console.log("will receiver props", this.props.getCompleteQA);
    this.pageSet();
  }
  pageSet = () => {
    console.log("complete data is ", this.state.completeQuestionData);
    // console.log("active page", this.state.activePage);
    const lastIndex = this.state.activePage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentItems = this.state.completeQuestionData.slice(
      firstIndex,
      lastIndex
    );
    console.log("current items ", currentItems);

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
  handlePageChange = pageNumber => {
    this.setState({
      activePage: pageNumber
    });
    // console.log("Page number is", this.state.activePage);
    const lastIndex = pageNumber * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentItems = this.state.completeQuestionData.slice(
      firstIndex,
      lastIndex
    );
    // console.log("last index", lastIndex);
    // console.log("first index", firstIndex);
    // console.log("current index", currentItems);
    this.setState({
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
        <Dashboard navProps={true} />
        <Table variant="dark">
          <thead>
            <tr>
              <th>Question List</th>
              <th>Approval</th>
              <th>Rejection</th>
            </tr>
          </thead>
          <tbody>
            {this.state.completeQuestionData.length > 0
              ? this.state.currentArray.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div
                          dangerouslySetInnerHTML={{ __html: data.message }}
                        ></div>
                      </td>
                      <td>
                        <Button variant="contained" color="primary">
                          Approve
                        </Button>
                      </td>
                      <td>
                        <Button variant="contained" color="primary">
                          Reject
                        </Button>
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
export default connect(mapState, actionCreators)(QuestionAnswers);

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav,Card } from "react-bootstrap";
import { getAdminUsersList,userService } from "../services/adminServices";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      userType:[],
      advance:'',
      basic:''
    }
  }


  componentDidMount() {
    getAdminUsersList()
      .then(res => {
        // console.log("all users list in admin panel is --> ", res.data.data.data);
        const totalUsers=res.data.data.data.length;
        // console.log("total users length",totalUsers);
        
        const type=res.data.data.data.filter(data=>{
          return data.service==='advance'
        })
        // console.log("tyupe andc tyupe laenga",type);
        // console.log("type length is ",type.length);
        this.setState({
          advance:type.length
        })
        const n=totalUsers-this.state.advance;
        this.setState({
          basic:n
        })
        
      })
      .catch(err => {
        console.log("Err in getAdmin users list ", err);
      });
      userService().then(res=>{
        console.log("data in user service",res);
        let data1={
          "type":res.data.data.data[0].name,
          "users":this.state.advance
        }
        console.log("total basic users are",this.state.basic,this.state.advance);

        let data2={
          "type":res.data.data.data[1].name,
          "users":this.state.basic
        }
        this.state.userType.push(data1);
        this.state.userType.push(data2);
        console.log("user types are ",this.state.userType);
        
      }).catch(err=>{
        console.log("Err in user service",err);
      })
  }

  render() {
    // const userMap=this.state.userType.map(key=>{
    //   <Card>
    //   <Card.Body>
    //     <Card.Title>
    //       {key}
    //     </Card.Title>
    //   </Card.Body>
    // </Card>
    // })

    return (
      <div className="dashboard-container">
      <Navbar bg="light">
        <Navbar.Brand>ADMIN DASHBOARD</Navbar.Brand>
        <Nav>
          <Nav.Link>USERS</Nav.Link>
          <Nav.Link>Q & A</Nav.Link>
          <Nav.Link>PAYMENT</Nav.Link>
          <Nav.Link>LOGOUT</Nav.Link>
        </Nav>
      </Navbar>
    
      </div>
    );
  }
}
export default withRouter(Dashboard);
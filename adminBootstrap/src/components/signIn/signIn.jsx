import React, { Component } from "react";
import { FormControl, FormLabel, FormGroup, Form, Card,Button } from "react-bootstrap";
export default class signUp extends Component {
  render() {
    return (
      <div className="login-container">
        <Card>
          <Card.Body>
              <Card.Title>Admin Login Page</Card.Title>
            <Form>
              <FormGroup controlId="">
                <FormLabel>Email Id</FormLabel>
                <FormControl type="email" placeholder="Enter email address" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Enter password here..."
                />
              </FormGroup>
              <Button variant="primary">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

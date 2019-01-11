import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { CREATE_USER } from './mutations';

class UserSignup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <Mutation mutation={CREATE_USER}>
        {(signupUser) => {

          const handleSubmit = (event) => {
            event.preventDefault();

            signupUser({ variables: { userInput: this.state } }).then((response) => {
              debugger;
            })
          }

          return(
            <div className="container">
              <h2>Signup</h2>

              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter Username"
                      name="username"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Enter password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default UserSignup;

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import gql from 'graphql-tag';

const CREATE_TODO_LIST = gql`
  mutation CreateTodoList($name: String!) {
    createTodoList(name: $name) {
      success
    }
  }
`;

class CreateTodoList extends Component {
  state = {
    todoListName: ''
  };


  handleChange = (event) => {
    // name = event.target.name  => todoListName
    const { name, value } = event.target;
    // { todoListName:  "asdasdas" }
    this.setState({ [name]: value });
  }


  render() {
    return(
      <Mutation mutation={CREATE_TODO_LIST}>
        {
          (createTodoList) => {

            const handleSubmit = (event) => {
              event.preventDefault();
              console.log(this.state);

              createTodoList({ variables: { name: this.state.todoListName } }).then((response) => {
                if(response.data.createTodoList.success) {

                  this.props.history.push('/');
                }
              })
            }

            return(
              <form onSubmit={handleSubmit} >
                <h1>Create Todo List Form</h1>

                <input name="todoListName" onChange={this.handleChange} value={this.state.name} />

                <button type="submit">Create Todo List</button>
              </form>
            )
          }
        }
      </Mutation>
    )
  }
}

export default withRouter(CreateTodoList);


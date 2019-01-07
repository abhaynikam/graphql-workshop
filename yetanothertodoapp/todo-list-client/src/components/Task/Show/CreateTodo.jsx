import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { NavLink } from 'react-router-dom';

import { CREATE_TASK } from '../mutations';
import { FETCH_ALL_TASKS } from '../queries';

class CreateTodo extends Component {
  state = { description: '', ListId: this.props.listId }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return(
      <Mutation mutation={CREATE_TASK}>
        {(createTask) => {
          const handleSubmit = (event) => {
            event.preventDefault();

            return createTask({
              variables: { taskInput: this.state },
              refetchQueries: [{ query: FETCH_ALL_TASKS, variables: { listId: this.props.listId } }]
            }).then(({ data }) => {
              if(data) {
                this.setState({ description: '' })
              }
            })
          }

          return(
            <div className="header">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <h2 className="col-sm-12 text-center">My To Do List</h2>
                  <NavLink to='/lists' className="col-sm-12 text-center">Back to All Todo Lists</NavLink>
                </div>
                <input
                  value={this.state.description}
                  onChange={this.handleChange('description')}
                  id="myInput"
                  placeholder="Todo"
                />
                <button type="submit" className="addBtn">Add Todo</button>
              </form>
            </div>
          );
        }}
      </Mutation>
    )
  }
}

export default CreateTodo;

import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

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
            <div id="myDIV" className="header">
              <form onSubmit={handleSubmit}>
                <h2>My To Do List</h2>
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

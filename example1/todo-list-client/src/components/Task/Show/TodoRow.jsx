import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { UPDATE_TODO } from '../mutations';
import DeleteTodoAction from './DeleteTodoAction';

class TodoRow extends Component {
  state = {
    complete: this.props.complete
  };

  render() {
    const { id, description, listId } = this.props,
      complete = this.state.complete;

    return(
      <Mutation mutation={UPDATE_TODO}>
        {(updateTodo) => {

          const handleChange = name => event => {
            this.setState(prevState => (
              { [name]: !prevState.complete }
            ), () => updateTodo({
              variables: {
                id: this.props.id,
                taskInput: {
                  complete: this.state.complete
                }
              }
            }));
          }

          return(
            <li className={complete ? "checked" : ""} onClick={handleChange('complete')}>
              {complete ? <strike>{description}</strike> : description}
              <DeleteTodoAction id={id} listId={listId} />
            </li>
          );
        }}
      </Mutation>
    )
  }
}

export default TodoRow;

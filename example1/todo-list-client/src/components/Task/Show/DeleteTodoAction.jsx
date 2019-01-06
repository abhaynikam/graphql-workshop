import React from 'react';
import { Mutation } from 'react-apollo';

import { FETCH_ALL_TASKS } from '../queries';
import { DELETE_TODO } from '../mutations';

const DeleteTodoAction = (props) => {
  return(
    <Mutation mutation={DELETE_TODO}>
      {(deleteTodo) => {

        const handleDeleteTodo = () => {
          deleteTodo({
            variables: { id: props.id },
            refetchQueries: [{ query: FETCH_ALL_TASKS, variables: { listId: props.listId } }],
          })
        }

        return(
          <span className='close' onClick={handleDeleteTodo}>x</span>
        );
      }}
    </Mutation>
  );
}

export default DeleteTodoAction;

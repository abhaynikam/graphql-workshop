import React from 'react';
import { Mutation } from 'react-apollo';

import { FETCH_ALL_LIST_ITEMS } from '../queries';
import { DELETE_TODO_LIST } from '../mutations';

const DeleteTodoList = (props) => {
  return(
    <Mutation mutation={DELETE_TODO_LIST}>
      {(deleteTodoList) => {

        const handleDeleteTodoList = (event) => {
          event.preventDefault();

          deleteTodoList({
            variables: { id: props.id },
            refetchQueries: [{ query: FETCH_ALL_LIST_ITEMS }],
          })
        }

        return(
          <span className='close' onClick={handleDeleteTodoList}>X</span>
        );
      }}
    </Mutation>
  );
}

export default DeleteTodoList;

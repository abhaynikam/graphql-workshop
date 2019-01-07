import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { withRouter, NavLink } from 'react-router-dom';

import ListForm from '../form';
import { UPDATE_TODO_LIST } from '../mutations';
import { FETCH_TODO_LIST_ITEM } from '../queries';

const EditList = (props) => {
  return(
    <Query query={FETCH_TODO_LIST_ITEM} variables={{ id: props.match.params.id }}>
      {({ loading, error, data }) => {
        if(loading) return <p>Loading...</p>;

        const { id, name } = data.todoList;

        return(
          <Mutation mutation={UPDATE_TODO_LIST}>
            {(updateTodoList) => {
              const onSubmit = values => {
                updateTodoList({ variables: { id, ...values } }).then(() => {
                  props.history.push('/lists');
                });
              }

              return(
                <div className="container">
                  <div className="row ml-1 mr-1">
                    <div className="col-sm-12">
                      <h2>Edit Todo List</h2>
                    </div>

                    <div className="col-sm-12">
                      <NavLink to='/lists'>Back to All Todo Lists</NavLink>
                    </div>
                  </div>

                  <ListForm handleSubmit={onSubmit} name={name} />
                </div>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
}

export default withRouter(EditList);

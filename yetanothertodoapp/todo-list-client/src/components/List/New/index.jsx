import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter, NavLink } from 'react-router-dom';

import ListForm from '../form';
import { CREATE_NEW_TODO_LIST } from '../mutations';

const NewList = (props) => {
  return(
    <Mutation mutation={CREATE_NEW_TODO_LIST}>
      {(createNewList) => {
        const onSubmit = values => {
          createNewList({ variables: values }).then(() => {
            props.history.push('/lists');
          });
        }

        return(
          <div className="container">
            <div className="row ml-1 mr-1">
              <div className="col-sm-12">
                <h2>Add New Todo List</h2>
              </div>

              <div className="col-sm-12">
                <NavLink to='/lists'>Back to All Todo Lists</NavLink>
              </div>
            </div>

            <ListForm handleSubmit={onSubmit} name='' />
          </div>
        );
      }}
    </Mutation>
  );
}

export default withRouter(NewList);

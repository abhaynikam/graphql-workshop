import React from 'react';
import { Mutation } from 'react-apollo';

import gql from 'graphql-tag';
import Form from '../form';
import { withRouter } from 'react-router-dom';


const CREATE_TODO_LIST = gql`
  mutation CreateTodoList($name: String!) {
    createTodoList(name: $name) {
      success
    }
  }
`;

const CreateTodoList = (props) => {
  return(
    <Mutation mutation={CREATE_TODO_LIST}>
      {
        (createTodoList) => {

          const handleSubmit = (formValues) => {
            createTodoList({ variables: { name: formValues.todoListName } }).then((response) => {
              if(response.data.createTodoList.success) {

                props.history.push('/');
              }
            })
          }

          return(
            <div>
              <h1>Create Todo Form</h1>

              <Form name="" onSubmit={handleSubmit} />
            </div>
          )
        }
      }
    </Mutation>
  )
}


export default withRouter(CreateTodoList);


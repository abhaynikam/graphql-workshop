import React from 'react';
import Form from '../form';
import { withRouter } from 'react-router-dom';

import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const GET_TODO_LIST = gql`
  query GetTodoList($id: ID) {
    getTodoList(id: $id) {
      name
    }
  }
`;

const UPDATE_TODO_LIST = gql`
  mutation UpdateTodoList($id: ID, $name: String!) {
    updateTodoList(id: $id, name: $name) {
      id
      name
    }
  }
`;

const  EditTodoList = (props) => {
  return(
    <Mutation mutation={UPDATE_TODO_LIST}>
      {(updateTodoList) => {
        const handleSubmit = (formValues) => {
          updateTodoList({ variables: { id: props.match.params.id, name: formValues.todoListName } }).then((response) => {

            props.history.push('/');
          })
        }

        return(
          <Query query={GET_TODO_LIST} variables={{id: props.match.params.id }}>
            {({loading, data})=> {
              if(loading) return <p>loading..</p>

              return(
                <div>
                  <h1>Edit Todo List Form</h1>
                  <Form name={data.getTodoList.name} onSubmit={handleSubmit} />
                </div>
              )
            }}

          </Query>
        )
      }}
    </Mutation>
  )
}


export default withRouter(EditTodoList);


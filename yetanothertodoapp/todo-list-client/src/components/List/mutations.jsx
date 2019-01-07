import gql from 'graphql-tag';

const CREATE_NEW_TODO_LIST = gql`
  mutation CreateNewTodoList($name: String!) {
    createNewTodoList(name: $name) {
      id
      name
    }
  }
`;

const UPDATE_TODO_LIST = gql`
  mutation UpdateTodoList($id: ID!, $name: String!) {
    updateTodoList(id: $id, name: $name) {
      id
      name
    }
  }
`;


export { CREATE_NEW_TODO_LIST, UPDATE_TODO_LIST };

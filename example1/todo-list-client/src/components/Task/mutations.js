import gql from 'graphql-tag';

const CREATE_TASK = gql`
  mutation CreateTask($taskInput: TaskInput!) {
    createTask(taskInput: $taskInput) {
      id
      description
      complete
      list: getList {
        id
      }
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $taskInput: TaskInput!) {
    updateTodo(id: $id, taskInput: $taskInput) {
      id
      complete
      description
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

export { CREATE_TASK, UPDATE_TODO, DELETE_TODO };

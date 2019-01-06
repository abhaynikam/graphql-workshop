import gql from 'graphql-tag';

const FETCH_ALL_TASKS = gql`
  query FetchAllTask($listId: ID!) {
    allTasks: getAllTasks(listId: $listId) {
      id
      description
      complete
    }
  }
`;

export { FETCH_ALL_TASKS };

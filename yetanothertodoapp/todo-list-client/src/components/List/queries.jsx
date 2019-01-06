import gql from 'graphql-tag';

const FETCH_ALL_LIST_ITEMS = gql`
  query FetchAllListItems {
    allTodoListItems: getAllTodoLists {
      id
      name
    }
  }
`;

export { FETCH_ALL_LIST_ITEMS };

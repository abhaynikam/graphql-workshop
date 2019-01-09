import gql from 'graphql-tag';

const FETCH_ALL_LIST_ITEMS = gql`
  query FetchAllListItems($limit: Int, $offset: Int, $query: String) {
    paginatedTodoListResponse: getAllTodoLists(limit: $limit, offset: $offset, query: $query) {
      totalRecords
      allTodoLists {
        id
        name
      }
    }
  }
`;

const FETCH_TODO_LIST_ITEM = gql`
  query FetchTodoListItem($id: ID!) {
    todoList: getTodoList(id: $id) {
      id
      name
    }
  }
`;

export { FETCH_ALL_LIST_ITEMS, FETCH_TODO_LIST_ITEM };

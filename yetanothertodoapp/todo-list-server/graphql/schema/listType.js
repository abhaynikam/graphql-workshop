export default `
  type List {
    id: ID!
    name: String!
  }

  type PaginatedAllListResponse {
    totalRecords: Int!,
    allTodoLists: [List!]!
  }

  type Query {
    getAllTodoLists(limit: Int, offset: Int): PaginatedAllListResponse
    getTodoList(id: ID!): List!
  }

  type Mutation {
    createNewTodoList(name: String!): List!
    updateTodoList(id: ID!, name: String!): List!
    deleteTodoList(id: ID!): Boolean
  }
`;

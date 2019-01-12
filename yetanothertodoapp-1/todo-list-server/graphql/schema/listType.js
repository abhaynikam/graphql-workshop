export default `
  type List {
    id: ID!
    name: String!
  }

  type Query {
    getAllTodoList: [List]
    getTodoList(id: ID): List
  }

  type ListResponse {
    success: Boolean!,
    list: List
  }

  type Mutation {
    createTodoList(name: String!): ListResponse
    updateTodoList(id: ID, name: String!): List
  }
`;

export default `
  type List {
    id: ID!
    name: String!
  }

  type Query {
    getAllTodoList: [List]
  }

  type ListResponse {
    success: Boolean!,
    list: List
  }

  type Mutation {
    createTodoList(name: String!): ListResponse
  }
`;

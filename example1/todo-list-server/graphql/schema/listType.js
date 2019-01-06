export default `
  type List {
    id: ID!
    name: String!
  }

  type Query {
    getAllTodoLists: [List]
  }

  type Mutation {
    createNewList(name: String!): List!
  }
`;

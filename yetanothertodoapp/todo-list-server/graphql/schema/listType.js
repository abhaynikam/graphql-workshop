export default `
  type List {
    id: ID!
    name: String!
  }

  type Query {
    getAllTodoLists: [List]
    getTodoList(id: ID!): List!
  }

  type Mutation {
    createNewTodoList(name: String!): List!
    updateTodoList(id: ID!, name: String!): List!
  }
`;

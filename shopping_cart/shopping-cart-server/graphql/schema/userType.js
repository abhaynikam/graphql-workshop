export default `
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
    order: [Order]
  }

  input UserInput {
    email: String!
    username: String!
    password: String!
  }

  type Mutation {
    createUser(userInput: UserInput!): Boolean!
  }
`;

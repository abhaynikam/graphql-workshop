export default `
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    getOrders: [Order]
  }

  input ProductInput {
    name: String!
    description: String
    price: Float!
  }

  type Query {
    getAllProducts: [Product]
  }

  type Mutation {
    createProduct(productInput: ProductInput): Product
  }
`;

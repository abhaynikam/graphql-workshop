export default `
  type Order {
    id: ID!
    total: Float!
    getUser: User
    getProducts: [Product]
  }

  input LineItemInput {
    product_id: ID!
    order_id: ID
    quantity: Int!
  }

  input OrderInput {
    total: Float!
    user_id: ID!
    lineItems: [LineItemInput]
  }

  type Mutation {
    createOrder(orderInput: OrderInput): Boolean
  }
`;

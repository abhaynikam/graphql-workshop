export default `
  type Order {
    id: ID!
    total: Float!
    getUser: User
    getProducts: [Product]
  }

  input LineItem {
    product_id: ID
    order_id: ID
    quantity: Int!
  }

  type Mutation {
    createOrder(total: Float!, user_id: ID!, lineItems: [LineItem]): Order
  }
`;

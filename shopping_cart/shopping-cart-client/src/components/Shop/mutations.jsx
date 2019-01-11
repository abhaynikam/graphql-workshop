import gql from 'graphql-tag';

const CREATE_ORDER = gql`
  mutation CreateOrder($orderInput: OrderInput!) {
    success: createOrder(orderInput: $orderInput)
  }
`;

export { CREATE_ORDER };

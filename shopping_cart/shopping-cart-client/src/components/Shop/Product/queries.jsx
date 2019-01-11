import gql from 'graphql-tag';

const FETCH_ALL_PRODUCTS = gql`
  query FetchAllProduct {
    products: getAllProducts {
      id
      name
      description
      price
    }
  }
`;

export { FETCH_ALL_PRODUCTS };

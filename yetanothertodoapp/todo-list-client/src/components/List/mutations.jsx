import gql from 'graphql-tag';

const CREATE_NEW_LIST = gql`
  mutation createNewList($name: String!) {
    createNewList(name: $name) {
      id
      name
    }
  }
`;

export { CREATE_NEW_LIST };

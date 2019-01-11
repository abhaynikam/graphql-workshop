import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation CreateUser($userInput: UserInput!) {
    success: createUser(userInput: $userInput)
  }
`;

export { CREATE_USER };

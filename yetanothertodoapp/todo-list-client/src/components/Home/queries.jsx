import gql from "graphql-tag";

const FETCH_GREETING_MESSAGE = gql`
  query FetchGreetingMessage {
    greetingMessage
  }
`;

export { FETCH_GREETING_MESSAGE };

import React from 'react';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

const FETCH_GREETING_MESSAGE = gql`
  query {
    greetingMessage
  }
`;

const Home = () => {

  return(
    <Query query={FETCH_GREETING_MESSAGE}>
      {
        ({ loading, data }) => {
          if(loading) return <p>Loading...</p>;

          return(
            <h1>{data.greetingMessage}</h1>
          )
        }
      }
    </Query>
  );
}

export default Home;

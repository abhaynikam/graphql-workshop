import React from 'react';
import { Query } from 'react-apollo';

import { FETCH_GREETING_MESSAGE } from './queries';

const Home = (props) => (
  <Query query={FETCH_GREETING_MESSAGE}>
    {({ loading, error, data }) => {
      if(loading) return <p>loading</p>;

      return(
        <h1>{data.greetingMessage}</h1>
      );
    }}
  </Query>
)

export default Home;

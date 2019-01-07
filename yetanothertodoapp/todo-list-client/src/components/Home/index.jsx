import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { NavLink } from 'react-router-dom';

import { FETCH_GREETING_MESSAGE } from './queries';

const HomePage = (props) => (
  <Query query={FETCH_GREETING_MESSAGE}>
    {({ loading, error, data }) => {
      if(loading) return <p>Loading...</p>;

      const listIndexUrl = '/lists';

      return(
        <Fragment>
          <h1>{data.greetingMessage}</h1>
          <NavLink to={listIndexUrl}>Go to All Todo Lists</NavLink>
        </Fragment>
      );
    }}
  </Query>
);

export default HomePage;

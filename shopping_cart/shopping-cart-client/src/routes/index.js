import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import Home from '../components/Home';
import UserSignup from '../components/User/Signup';

const Routes = (props) => (
  <ApolloProvider client={props.client}>
    <Router>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={UserSignup} path='/users/signup' exact />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default Routes;

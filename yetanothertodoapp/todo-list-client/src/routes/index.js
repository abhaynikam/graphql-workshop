import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Home from '../components/Home';
import NewList from '../components/List/New';
import ListIndex from '../components/List/Index';
import Task from '../components/Task/Show';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';


export default (props) => (
  <ApolloProvider client={props.client}>
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/lists/new' component={NewList} exact />
        <Route path='/lists' component={ListIndex} exact />
        <Route path='/lists/:id/tasks' component={Task} exact />
      </Switch>
    </Router>
  </ApolloProvider>
)

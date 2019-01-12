import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../components/Home';
import CreateTodoList from '../components/List/Create';
import EditTodoList from '../components/List/Edit';
import { ApolloProvider } from 'react-apollo';


const Routes = (props) => {
  return(
    <ApolloProvider client={props.client}>
      <Router>
        <Switch>
          <Route path="/list/new" component={CreateTodoList} exact />
          <Route path="/list/:id/edit" component={EditTodoList} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default Routes;

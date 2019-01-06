import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { NavLink } from 'react-router-dom';

import './index.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FETCH_ALL_LIST_ITEMS } from '../queries';

class ListIndex1 extends Component {
  renderListItems = (allTodoListItems) =>
    allTodoListItems.map((listItem) => {
      return(
        <NavLink to={`/lists/${listItem.id}/tasks`}>
          <li key={listItem.id}>{listItem.name}</li>
        </NavLink>
      );
    });

  render() {
    return(
      <Query query={FETCH_ALL_LIST_ITEMS}>
        {({ loading, error, data }) => {
          if(loading) return <p>Loading...</p>

          return(
            <div>
              <div className="header">
                <h2>All Lists</h2>
                <NavLink to='/lists/new'>Add New List</NavLink>
              </div>
              <ul >
                {this.renderListItems(data.allTodoListItems)}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ListIndex1;

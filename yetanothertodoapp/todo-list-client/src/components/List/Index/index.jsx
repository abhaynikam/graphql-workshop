import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { NavLink } from 'react-router-dom';

import DeleteTodoList from '../Delete';
import { FETCH_ALL_LIST_ITEMS } from '../queries';

class ListIndex extends Component {
  renderListItems = (allTodoListItems) =>
    allTodoListItems.map((listItem) => {
      return(
        <NavLink to={`/lists/${listItem.id}/tasks`} key={listItem.id}>
          <li>
            {listItem.name}
            <NavLink to={`/lists/${listItem.id}/edit`}>
              <span className='edit'>Edit</span>
            </NavLink>
            <DeleteTodoList id={listItem.id} />
          </li>
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
              <ul>
                {this.renderListItems(data.allTodoListItems)}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ListIndex;

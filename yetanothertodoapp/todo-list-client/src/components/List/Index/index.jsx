import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import DeleteTodoList from '../Delete';
import { FETCH_ALL_LIST_ITEMS } from '../queries';

class ListIndex extends Component {
  state = {
    limit: 5,
    offset: 0,
    currentPage: 0,
    query: ""
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ query: event.target.value });
  }

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
    const { limit, offset, currentPage, query } = this.state;

    return(
      <Query query={FETCH_ALL_LIST_ITEMS} variables={{ limit, offset, query }}>
        {({ loading, error, data }) => {
          if(loading) return <p>Loading...</p>

          const handlePageClick = (data) => {
            const currentPage = data.selected,
              offset = Math.ceil(currentPage * this.state.limit);

            this.setState({ offset, currentPage });
          }

          const pageCount = Math.ceil(data.paginatedTodoListResponse.totalRecords / limit);

          return(
            <div>
              <div className="header">
                <h2>All Lists</h2>
                <NavLink to='/lists/new'>Add New List</NavLink>
              </div>
              <div className="jumbotron">
                <input
                  name="query"
                  onChange={this.handleChange}
                  type="text"
                  value={query}
                  className="col-sm-12"
                  placeholder="Enter Search String"
                />
              </div>
              <ul>
                {this.renderListItems(data.paginatedTodoListResponse.allTodoLists)}
              </ul>

              <ReactPaginate
                previousLabel="prev"
                nextLabel="next"
                forcePage={currentPage}
                pageCount={pageCount}
                pageRangeDisplayed={5}
                containerClassName="pagination"
                activeClassName="active"
                onPageChange={handlePageClick}
                disableInitialCallback={true}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ListIndex;

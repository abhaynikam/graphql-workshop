import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import './index.css';

import { FETCH_ALL_TASKS } from '../queries';
import CreateTodo from './CreateTodo';
import TodoRow from './TodoRow';

class Task extends Component {
  render() {
    const listId = this.props.match.params.id;

    return(
      <Query query={FETCH_ALL_TASKS} variables={{ listId: listId }}>
      {({loading, error, data}) => {
        if(loading) return <p>Loading...</p>

        const { allTasks } = data;

        return(
          <div>
            <CreateTodo listId={listId} />
            <ul>
              {allTasks.map((task) => {
                return(
                  <TodoRow key={task.id} {...task} listId={listId} />
                );
              })}
            </ul>
          </div>
        )
      }}
      </Query>
    );
  }
}

export default withRouter(Task);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';




class CreateTodoList extends Component {
  state = {
    todoListName: this.props.name
  };


  handleChange = (event) => {
    // name = event.target.name  => todoListName
    const { name, value } = event.target;
    // { todoListName:  "asdasdas" }
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <input name="todoListName" onChange={this.handleChange} value={this.state.todoListName} />

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default withRouter(CreateTodoList);


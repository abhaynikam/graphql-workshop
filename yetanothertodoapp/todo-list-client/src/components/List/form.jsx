import React, { Component } from 'react';

class ListForm extends Component {
  state = { name: this.props.name };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state)
  }

  render() {
    return(
      <form className="form-horizontal jumbotron" onSubmit={this.handleFormSubmit}>
        <div className="form-group clearfix">
          <label className="control-label col-sm-2">Todo List Name:</label>
          <div className="col-sm-10">
            <input name="name"
              placeholder="Todo List Name"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group clearfix">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Create New Todo List</button>
          </div>
        </div>
      </form>
    )
  }
}

export default ListForm;

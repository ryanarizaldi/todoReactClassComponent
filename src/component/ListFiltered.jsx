// this component only for experiment only
import React, { Component } from "react";
export default class ListFiltered extends Component {
  state = {
    value: "",
  };

  handleDelete(id) {
    this.props.remove(id);
  }

  handleEdit(id) {
    this.props.edit(id);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleDone(id) {
    const { value } = this.state;
    const { done } = this.props;

    done(id, value);
  }

  handleComplete(id) {
    this.props.complete(id);
  }

  render() {
    const { element } = this.props;

    if (!element.edit) {
      return (
        <li className={element.completed ? "complete" : ""}>
          {element.text}{" "}
          <button type="button" onClick={() => this.handleDelete(element.id)}>
            Delete
          </button>
          <button type="button" onClick={() => this.handleEdit(element.id)}>
            Edit
          </button>
          <button type="button" onClick={() => this.handleComplete(element.id)}>
            <span role="img">✔️</span>
          </button>
        </li>
      );
    } else {
      return (
        <li key={element.id}>
          <input
            type="text"
            onChange={(e) => this.handleChange(e)}
            placeholder={element.text}
          />
          <button onClick={() => this.handleEdit(element.id)}>cancel</button>
          <button onClick={() => this.handleDone(element.id)}>done</button>
        </li>
      );
    }
  }
}

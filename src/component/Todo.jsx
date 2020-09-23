import React, { Component } from "react";
import List from "./List";
// import ListFiltered from "./ListFiltered";

export default class Todo extends Component {
  // const input = useRef(null);

  state = {
    value: "",
  };

  submit() {
    this.props.add(this.state.value);
    // this.setState({ value: null });
    // this.state.value = null;
  }

  sort() {
    this.props.sort();
  }

  filterComplete() {
    this.props.filterComplete();
  }

  filterNotComplete() {
    this.props.filterNotComplete();
  }

  showAllList() {
    this.props.showAllList();
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          type="text"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button type="button" onClick={() => this.submit()}>
          Add
        </button>
        <button type="button" onClick={() => this.sort()}>
          Sort
        </button>
        <button type="button" onClick={() => this.filterComplete()}>
          Filter Complete
        </button>
        <button type="button" onClick={() => this.filterNotComplete()}>
          Filter Not Complete
        </button>
        <button type="button" onClick={() => this.showAllList()}>
          Show All Todo
        </button>
        <ul>
          {this.props.showFilter
            ? this.props.filter.map((element) => (
                <List
                  key={element.id}
                  todo={this.props.todo}
                  element={element} //hasil dari map
                  remove={this.props.remove}
                  edit={this.props.edit}
                  complete={this.props.complete}
                  done={this.props.done}
                />
              ))
            : this.props.todo.map((element) => (
                <List
                  key={element.id}
                  todo={this.props.todo}
                  element={element} //hasil dari map
                  remove={this.props.remove}
                  edit={this.props.edit}
                  complete={this.props.complete}
                  done={this.props.done}
                />
              ))}
        </ul>
      </div>
    );
  }
}

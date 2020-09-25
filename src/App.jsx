import React, { Component } from "react";
import Header from "./component/Header";
import Todo from "./component/Todo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";

import "./App.css";

export default class App extends Component {
  state = {
    todo: [],
    filter: [],
    showFilter: false,
  };

  componentDidMount = () => {
    const local = JSON.parse(localStorage.getItem("todoBaru"));
    if (local)
      this.setState({
        todo: local,
      });
  };

  componentDidUpdate = () => {
    localStorage.setItem("todoBaru", JSON.stringify(this.state.todo));
  };

  add = (value) => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          id: uuidv4(),
          text: value,
          completed: false,
          date: new Date(),
          edit: false,
        },
      ],
    });
  };

  complete = (id) => {
    const newTodo = this.state.todo;
    const todo = newTodo.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({
      todo: newTodo,
    });
  };

  remove = (id) => {
    const newTodo = [...this.state.todo];
    const deleted = newTodo.filter((todo) => todo.id !== id);
    this.setState({
      todo: deleted,
      filter: deleted,
    });
  };

  edit = (id) => {
    const newTodo = [...this.state.todo];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.edit = !todo.edit;
    this.setState({
      todo: newTodo,
    });
  };

  done = (id, value) => {
    const newTodo = this.state.todo;
    const todo = newTodo.find((todo) => todo.id === id);
    todo.edit = !todo.edit;
    todo.text = value;

    this.setState({
      todo: newTodo,
    });
  };

  sort = () => {
    const newTodo = this.state.todo;
    const sorted = newTodo.sort((a, b) => a.completed - b.completed);

    this.setState({
      todo: sorted,
    });
  };

  filterComplete = () => {
    const newTodo = this.state.todo;
    const completed = newTodo.filter((complete) => complete.completed === true);
    this.setState({
      filter: completed,
      showFilter: true,
    });
  };

  filterNotComplete = () => {
    const newTodo = this.state.todo;
    const notCompleted = newTodo.filter(
      (complete) => complete.completed === false
    );
    this.setState({
      filter: notCompleted,
      showFilter: true,
    });
  };

  showAllList = () => {
    this.setState({
      showFilter: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about/:ss?">
              <About />
            </Route>
            <Route path="/detail/:id?">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Todo
          todo={this.state.todo}
          filter={this.state.filter}
          showFilter={this.state.showFilter}
          add={this.add}
          remove={this.remove}
          edit={this.edit}
          done={this.done}
          complete={this.complete}
          sort={this.sort}
          filterComplete={this.filterComplete}
          filterNotComplete={this.filterNotComplete}
          showAllList={this.showAllList}
        />
      </div>
    );
  }
}

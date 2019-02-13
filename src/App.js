import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const init = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  state = {
    todos: init,
    task: ""
  };

  clearForm = () => {
    this.setState({
      task: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddToDo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    this.clearForm();
  };

  handleClickToDo = e => {
    e.target.classList.toggle("complete");
    const todos = this.state.todos.map(todo => {
      if (todo.id === e.target.id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  handleCompleteTasks = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className="container">
        <h2>To Do Application</h2>

        <TodoForm
          handleAddToDo={this.handleAddToDo}
          handleChange={this.handleChange}
          task={this.state.task}
        />

        <button className="completeBtn" onClick={this.handleCompleteTasks}>
          Complete Tasks
        </button>

        <TodoList
          handleClickToDo={this.handleClickToDo}
          handleCompleteTasks={this.handleCompleteTasks}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;

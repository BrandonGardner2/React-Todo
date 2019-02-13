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
    todos: init
  };

  handleAddToDo() {}

  handleClickToDo() {}

  handleComplete() {}
  render() {
    return (
      <div className="container">
        <h2>To Do Application</h2>
      </div>
    );
  }
}

export default App;

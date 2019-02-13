import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todoList">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} onClick={props.handleClickToDo} />
      ))}
    </div>
  );
};

export default TodoList;

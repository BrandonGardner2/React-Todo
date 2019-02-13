import React from "react";

const Todo = props => {
  return (
    <div
      className="todo"
      onClick={e => props.handleClickToDo(e, props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;

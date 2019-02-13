import React from "react";

const Todo = props => {
  return (
    <div className="todo" onClick={props.handleClickToDo}>
      {props.todo.task}
    </div>
  );
};

export default Todo;

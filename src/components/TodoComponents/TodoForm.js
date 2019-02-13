import React from "react";

const ToDoForm = props => {
  return (
    <form onSubmit={props.handleAddToDo}>
      <input
        type="text"
        placeholder="...todo"
        value={props.task}
        onChange={props.handleChange}
        name="task"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default ToDoForm;
